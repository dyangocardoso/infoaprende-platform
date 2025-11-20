# export-plantilla.ps1
# Ejecutar desde la raíz del repositorio (Windows PowerShell)
$BaseUrl     = 'http://localhost:4000'
$Email       = 'admin@infoaprende.com'
$Password    = 'Admin123!'
$PlantillaId = 1
$OutPdf      = 'plantilla_completa_prueba.pdf'
$OutHtml     = 'plantilla_prueba.html'

function Log { param($m) Write-Host (Get-Date -Format 'u') ' ' $m }

Log "Comprobando /api/health en $BaseUrl ..."
try {
  $health = Invoke-RestMethod -Uri "$BaseUrl/api/health" -Method Get -ErrorAction Stop
  Log "Health: $($health.status) (db: $($health.database))"
} catch {
  Log "ERROR: no se pudo alcanzar $BaseUrl/api/health -> $($_.Exception.Message)"
  exit 1
}

# Login
Log "Haciendo login como $Email ..."
try {
  $loginBody = @{ email = $Email; password = $Password } | ConvertTo-Json
  $loginResp = Invoke-RestMethod -Uri "$BaseUrl/api/users/login" -Method Post -Body $loginBody -ContentType 'application/json' -ErrorAction Stop
  $loginResp | ConvertTo-Json -Depth 10 | Out-File login.json -Encoding UTF8
  $token = $loginResp.token
  if (-not $token) { Log "ERROR: no se obtuvo token"; exit 1 }
  Log "Token obtenido (guardado en login.json)."
} catch {
  Log "ERROR en login: $($_.Exception.Message)"
  if ($_.Exception.Response) {
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $body = $reader.ReadToEnd()
    $body | Out-File login_error.json -Encoding UTF8
    Log "Cuerpo de error guardado en login_error.json"
  }
  exit 1
}

# Listar plantillas
$headers = @{ Authorization = "Bearer $token" }
Log "Listando plantillas (GET /api/docente/plantillas) ..."
try {
  $plantillas = Invoke-RestMethod -Uri "$BaseUrl/api/docente/plantillas" -Method Get -Headers $headers -ErrorAction Stop
  $plantillas | ConvertTo-Json -Depth 10 | Out-File plantillas.json -Encoding UTF8
  Log "Plantillas guardadas en plantillas.json"
  if ($plantillas.plantillas) {
    $plantillas.plantillas | Select-Object id,nombre,descripcion | Format-Table | Out-String | Write-Host
  }
} catch {
  Log "ERROR listando plantillas: $($_.Exception.Message)"
  if ($_.Exception.Response) {
    $_.Exception.Response.GetResponseStream() | %{ new-object System.IO.StreamReader($_) } | %{ $_.ReadToEnd() } | Out-File plantillas_error.json -Encoding UTF8
    Log "Respuesta guardada en plantillas_error.json"
  }
  exit 1
}

# Exportar plantilla a PDF
Log "Exportando plantilla id=$PlantillaId a PDF ..."
try {
  $exportBody = @{ data = @{ titulo = 'Prueba'; contenido = 'Contenido de prueba' } } | ConvertTo-Json -Depth 10
  Invoke-WebRequest -Uri "$BaseUrl/api/docente/plantillas/$PlantillaId/export" -Method Post -Headers $headers -Body $exportBody -ContentType 'application/json' -OutFile $OutPdf -ErrorAction Stop
  Log "PDF guardado: $OutPdf"
} catch {
  Log "ERROR exportando plantilla: $($_.Exception.Message)"
  if ($_.Exception.Response) {
    try {
      $stream = $_.Exception.Response.GetResponseStream()
      $reader = New-Object System.IO.StreamReader($stream)
      $body = $reader.ReadToEnd()
      $body | Out-File plantilla_export_error.json -Encoding UTF8
      Log "Cuerpo de error guardado en plantilla_export_error.json"
    } catch { Log "No se pudo leer cuerpo de respuesta de error." }
  }
  # No salimos aún: intentaremos obtener HTML para diagnosticar
}

# Obtener versión HTML (previsualización)
Log "Obteniendo versión HTML (format=html) y guardando en $OutHtml ..."
try {
  # Usamos Invoke-WebRequest para guardar contenido tal cual lo envía el servidor
  $htmlUri = "$BaseUrl/api/docente/plantillas/$PlantillaId/export?format=html"
  Invoke-WebRequest -Uri $htmlUri -Method Get -Headers $headers -OutFile $OutHtml -ErrorAction Stop
  Log "HTML guardado: $OutHtml"
} catch {
  Log "ERROR obteniendo HTML: $($_.Exception.Message)"
  if ($_.Exception.Response) {
    try {
      $stream = $_.Exception.Response.GetResponseStream()
      $reader = New-Object System.IO.StreamReader($stream)
      $body = $reader.ReadToEnd()
      $body | Out-File plantilla_html_error.json -Encoding UTF8
      Log "Cuerpo de error guardado en plantilla_html_error.json"
    } catch { Log "No se pudo leer cuerpo de respuesta de error." }
  }
}

# Comprobar Puppeteer instalado en backend (opcional)
Log "Comprobando si puppeteer está presente en backend (npm ls puppeteer) ..."
try {
  Push-Location -Path ".\backend"
  $pupp = cmd.exe /c "npm ls puppeteer --depth=0 2>&1"
  $pupp | Out-File ..\puppeteer_check.txt -Encoding UTF8
  Pop-Location
  Log "Resultado guardado en puppeteer_check.txt"
} catch {
  Pop-Location -ErrorAction SilentlyContinue
  Log "ERROR comprobando puppeteer: $($_.Exception.Message)"
}

Log "Proceso completado."

<#
  start-with-docker.ps1
  Levanta el stack con Docker Compose y espera a que backend y frontend respondan.
  Uso: ejecutar desde la raíz del repo en PowerShell:
    .\scripts\start-with-docker.ps1
#>

Param()

Push-Location -Path (Split-Path -Path $MyInvocation.MyCommand.Definition -Parent)\..\

Write-Output "Building and starting Docker Compose services..."
docker compose up -d --build

function Wait-For-Url {
    param(
        [string]$url,
        [int]$timeoutSec = 60
    )
    $start = Get-Date
    while ((Get-Date) - $start -lt (New-TimeSpan -Seconds $timeoutSec)) {
        try {
            $resp = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 5 -ErrorAction Stop
            if ($resp.StatusCode -ge 200 -and $resp.StatusCode -lt 400) {
                return $true
            }
        } catch {
            Start-Sleep -Seconds 2
        }
    }
    return $false
}

Write-Output "Waiting for backend (http://localhost:4000/api/health)..."
if (Wait-For-Url -url 'http://localhost:4000/api/health' -timeoutSec 90) {
    Write-Output "Backend is up"
} else {
    Write-Error "Backend did not start within timeout. Check 'docker compose logs backend'"
    Pop-Location
    exit 1
}

Write-Output "Waiting for frontend preview (http://localhost:5173)..."
if (Wait-For-Url -url 'http://localhost:5173/' -timeoutSec 90) {
    Write-Output "Frontend is up"
} else {
    Write-Error "Frontend did not start within timeout. Check 'docker compose logs frontend'"
    Pop-Location
    exit 1
}

Write-Output "All services are up. Frontend: http://localhost:5173  Backend: http://localhost:4000"
Pop-Location

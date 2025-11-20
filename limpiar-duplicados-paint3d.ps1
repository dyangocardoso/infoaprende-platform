# Script para limpiar archivos duplicados en paint-3d
# Elimina todos los archivos de temas que no sean la versión '-corrected.js'
$folder = "c:\Users\PROFESOR\Desktop\INFOAPRENDE\frontend\src\data\cursos\paint-3d"
Get-ChildItem -Path $folder -File | Where-Object {
    $_.Name -match "^tema-\\d{2}.*\\.js$" -and $_.Name -notmatch "-corrected\\.js$"
} | Remove-Item -Force
Write-Output "Archivos duplicados eliminados. Solo quedan los '-corrected.js' y 'index.js'."

import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const redesPath = path.resolve(__dirname, '..', 'frontend', 'src', 'data', 'cursos', 'redes', 'index.js');

async function main(){
  try{
    const mod = await import(pathToFileURL(redesPath).href);
    const validar = mod.validarCurso || (mod.default && mod.default.validarCurso);
    if(!validar){
      console.error('No se encontró validarCurso en el módulo redes');
      process.exit(2);
    }
    const resultado = validar();
    console.log(JSON.stringify(resultado, null, 2));
  }catch(err){
    console.error('Error validando redes:', err);
    process.exit(1);
  }
}

main();

import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cursoPath = path.resolve(__dirname, '..', 'frontend', 'src', 'data', 'cursos', 'ciberseguridad', 'index.js');

async function main(){
  try{
    const mod = await import(pathToFileURL(cursoPath).href);
    const validar = mod.validarCurso || (mod.default && mod.default.validarCurso);
    if(!validar){
      console.error('No se encontró validarCurso en el módulo ciberseguridad');
      process.exit(2);
    }
    const resultado = validar();
    console.log(JSON.stringify(resultado, null, 2));
  }catch(err){
    console.error('Error validando ciberseguridad:', err);
    process.exit(1);
  }
}

main();

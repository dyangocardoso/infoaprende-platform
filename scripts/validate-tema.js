#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');
const yaml = require('js-yaml');

const ajv = new Ajv({ allErrors: true, strict: false });

function readFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const content = fs.readFileSync(filePath, 'utf8');
  if (ext === '.json') return JSON.parse(content);
  if (ext === '.yml' || ext === '.yaml' || ext === '.md') {
    // try to extract frontmatter YAML from markdown
    const fm = content.match(/^-{3}[\s\S]*?-{3}/);
    if (fm) {
      return yaml.load(fm[0].replace(/^-{3}/g, ''));
    }
    return yaml.load(content);
  }
  throw new Error('Unsupported file extension: ' + ext);
}

function validate(filePath) {
  const schemaPath = path.resolve(__dirname, '..', 'schemas', 'tema.schema.json');
  if (!fs.existsSync(schemaPath)) {
    console.error('Schema not found:', schemaPath);
    process.exit(2);
  }
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  const validate = ajv.compile(schema);
  let data;
  try {
    data = readFile(filePath);
  } catch (e) {
    console.error('Error reading file:', e.message);
    return { ok: false, errors: [e.message] };
  }
  const ok = validate(data);
  if (!ok) {
    return { ok: false, errors: validate.errors };
  }
  return { ok: true };
}

async function main() {
  const args = process.argv.slice(2);
  if (!args[0]) {
    console.error('Uso: node scripts/validate-tema.js <ruta-al-archivo-tema>');
    process.exit(1);
  }
  const target = args[0];
  const res = validate(target);
  if (!res.ok) {
    console.error('VALIDATION FAILED for', target);
    console.error(JSON.stringify(res.errors, null, 2));
    process.exit(3);
  }
  console.log('VALID');
}

if (require.main === module) main();

module.exports = { validate };

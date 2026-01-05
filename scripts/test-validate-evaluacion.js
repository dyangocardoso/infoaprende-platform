const { validate } = require('./validate-evaluacion');
const path = require('path');

const examples = [
  path.resolve(__dirname, '..', 'templates', 'evaluacion-template.md')
];

let failed = false;
for (const ex of examples) {
  const res = validate(ex);
  console.log(ex, res.ok ? 'OK' : 'FAIL');
  if (!res.ok) {
    console.error(res.errors);
    failed = true;
  }
}
process.exit(failed ? 1 : 0);

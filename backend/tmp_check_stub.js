const { setupPlantillaStub } = require('./test/helpers/plantillaStub');
setupPlantillaStub('<div>stub</div>');
const path = require('path');
const candidates = [
  '../../config/database-init',
  '../config/database-init',
  '../../config/database-init.js',
  '../config/database-init.js',
  path.resolve(process.cwd(), 'config', 'database-init'),
  path.resolve(process.cwd(), 'config', 'database-init.js')
];
console.log('SKIP_DB_CHECK=', process.env.SKIP_DB_CHECK);
candidates.forEach(p => {
  try {
    const r = require.resolve(p);
    console.log('RESOLVED:', p, '->', r);
    const cached = require.cache[r];
    console.log('IN CACHE:', !!cached);
    if (cached) {
      console.log(' export keys:', Object.keys(cached.exports || {}));
    }
  } catch (e) { console.log('RESOLVE FAIL:', p, e.message); }
});

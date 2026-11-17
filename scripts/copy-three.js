const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', 'node_modules', 'three', 'build', 'three.min.js');
const destinationDir = path.join(__dirname, '..', 'www', 'vendor');
const destination = path.join(destinationDir, 'three.min.js');

if (!fs.existsSync(source)) {
  throw new Error('Three.js was not found. Run npm install first.');
}
fs.mkdirSync(destinationDir, { recursive: true });
fs.copyFileSync(source, destination);
console.log('Copied Three.js r128 into www/vendor.');

const fs = require('fs');
const path = require('path');
const filePath = path.resolve('./test.js');

console.log(fs.readFileSync(filePath, 'utf-8'));
// fs.readdir(filePath, (err, files) => {
//   console.log(files, err, 'cccc')
// })
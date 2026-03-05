const path = require('path')

console.log(path.basename(__filename)) //file name
console.log(path.dirname(__filename)); // directory until curr folder
console.log(path.extname(__filename)); // extension name


console.log(path.join('folder', 'file.txt'));

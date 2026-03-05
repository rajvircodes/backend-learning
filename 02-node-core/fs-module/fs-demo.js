const fs = require('fs')

// Write file 
fs.writeFileSync('demo.txt', "Hello world");

// read file 

const data = fs.readFileSync('demo.txt', 'utf-8')

console.log(data);

// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   console.log(data);
// });
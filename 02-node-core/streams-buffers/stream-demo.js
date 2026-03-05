const fs = require('fs')

const stream = fs.createReadStream('demo.txt', 'utf-8')

stream.on('data', (chunk)=>{
    console.log("chunk", chunk);
    
})
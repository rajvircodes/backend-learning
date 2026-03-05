const htpp = require('http')

const server = htpp.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Home page")
    }
    else if(req.url === '/about'){
        res.end("About page")
    }
    else{
        res.end("404 Page Note Found!")
    }
})



server.listen(3000, ()=>{
    console.log("Server is running on port 3000");
    
})
const express = require('express');
const app = express()


// custom middleware 
const logger = (req, res, next)=>{
    console.log(`${req.method} request to ${req.url}`);
    next()
}
app.use(logger)


app.get('/', (req, res)=>{
    res.send('Home page')
})

app.get('/about',(req, res)=>{
    res.send('About page')
})
app.get('/Profile',(req, res)=>{
    res.send('Your profile')
})


app.listen(3000, ()=>{
    console.log("server is running on 3000");
    
})

// localhost:3000/about
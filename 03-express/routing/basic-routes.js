const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send('Welcome to Home page');
})

app.get('/about', (req, res)=>{
    res.send('This is About page');
})

app.get('/contact', (req, res)=>{
    res.send('Contact us at support@gmail.com')
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
    
})
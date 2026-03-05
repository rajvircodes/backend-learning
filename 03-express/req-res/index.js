const express = require('express')
const app = express()

app.use(express.json())

app.post('/user', (req, res)=>{
    const {name, age} = req.body;

    res.json({
        message:"User received",
        user:{
            name, 
            age
        }
    })
})


app.listen(3000, ()=>{
    console.log('Server is running on 3000');
    
})

// Express request object contains:
// req.body
// req.params
// req.query
// req.headers

// Response object allows sending:
// res.send()
// res.json()
// res.status()
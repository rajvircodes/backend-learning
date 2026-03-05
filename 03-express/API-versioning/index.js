const express = require('express')
const app = express()

// Version 1 

app.get('/api/v1/users', (req, res)=>{
    res.send({
        version:'v1',
        users: ['Rajvir', 'Amit']
    })
})

// Version 2
app.get('/api/v2/users', (req, res)=>{
    res.json({
        version:'v2',
        user: [
            {id: 1, name: 'Rajvir'},
            {id: 2, name: 'Amit'}
        ]
    })
})

app.listen(3000, ()=> {
    console.log("Server is running on 3000");
    
})
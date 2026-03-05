const express = require('express')

const app = express()

app.get('/error', (req, res, next)=>{
    const err = new Error('Something went wrong')
    next(err)
});

// error middleware 
app.use((err, req, res, next)=>{
    console.error(err.message);
    res.status(500).json({
        message:"Internal server Error"
    })
    
});

app.listen(3000, ()=>{
    console.log("Server is running on 3000");
    
})

// Express has special middleware for errors. 
// database errors
// server errors
// validation errors
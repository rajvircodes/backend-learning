const express = require('express')
const app = express()

app.get('/search', (req, res)=>{
    const keyword = req.query.keyword;
    const page = req.query.page;

    res.json({
        message:"Search results",
        keyword,
        page
    })

})

app.listen(3000, ()=>{
    console.log("Server is running on 3000");
    
})

// localhost:3000/search?keyword=laptop&page=3


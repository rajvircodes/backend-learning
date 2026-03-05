const express = require('express')
const morgan = require('morgan')

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.send('Hello from Express')
})

app.listen(3000, ()=>{
    console.log('Server is running on 3000');
    
})

// output: GET / 200 4ms
// Companies use logging for :- Monitoring, debugging, analytics

require('dotenv').config()
const express = require("express");
const app = express();
const goalRoutes = require('./routes/goals.routes')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')


connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/goals', goalRoutes)

const port = process.env.PORT || 3000

app.use(errorHandler)


app.listen(port, () => console.log("Server is running on port 3000"));

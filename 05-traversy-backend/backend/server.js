require('dotenv').config()
const express = require("express");
const app = express();
const goalRoutes = require('./routes/goals.routes')
const userRoutes = require('./routes/user.routes')
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')
connectDB()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

const port = process.env.PORT || 3000

app.use(errorHandler)


app.listen(port, () => console.log("Server is running on port 3000"));

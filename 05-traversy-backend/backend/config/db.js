const mongoose = require('mongoose')

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database connected");
        
    } catch (error) {
        console.log("ERROR",error);
        process.exit(1)
    }
    
}

module.exports = connectDB
require("dotenv").config();
const express = require("express");
const pool = require("./config/db");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world from backend",
  });
});

async function initialDatabase() {
  try {
    // 1.connect database
    await pool.query("SELECT NOW()");
    console.log("✅ pg-database connected success!");

    // 2.create user
    const createTableQuery = `CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY, 
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;

    await pool.query(createTableQuery);
    console.log("User table is ready!");
    createUser();
  } catch (error) {
    console.log("Database connection error", error.message);
    process.exit(1);
  }
}

async function createUser() {
  try {
    const createUserQuery = `INSERT INTO users (username, email) 
  VALUES
        ('rajvirsinh','rajvirsinh@gmail.com'),
        ('Ashu','ashu@gmail.com')
  ON CONFLICT (username) DO NOTHING;`;

    await pool.query(createUserQuery);
    console.log("✅ User created success! ");
  } catch (error) {
    console.log("Error creating user", error.message);
  }
}
initialDatabase();

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log("Server is running on port", PORT));

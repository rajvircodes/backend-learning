require("dotenv").config();
const express = require("express");
const prisma = require("./config/db");

const app = express();
app.use(express.json());

// -------------------------------------------------------------
// ROUTES
// -------------------------------------------------------------

// 1. Health check route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello world from Express + Prisma backend!",
  });
});

// 2. GET all users
app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// 3. GET a single user by ID
app.get("/users/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error.message);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// 4. POST create a new user
app.post("/users", async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).json({ error: "Username and email are required." });
    }

    const newUser = await prisma.user.create({
      data: { username, email },
    });

    res.status(201).json({
      message: "User created successfully!",
      user: newUser,
    });
  } catch (error) {
    // P2002 is Prisma's error code for unique constraint violation (e.g., duplicate username or email)
    if (error.code === "P2002") {
      return res.status(409).json({
        error: `A user with that ${error.meta?.target?.[0] || "field"} already exists.`,
      });
    }

    console.error("Error creating user:", error.message);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// -------------------------------------------------------------
// DATABASE INITIALIZATION & SEEDING
// -------------------------------------------------------------

async function initialDatabase() {
  try {
    // Test Prisma database connection
    await prisma.$queryRaw`SELECT 1`;
    console.log("✅ Prisma connected to PostgreSQL successfully!");

    // Seed default users if they don't exist yet
    await seedUsers();
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    process.exit(1);
  }
}

async function seedUsers() {
  try {
    const defaultUsers = [
      { username: "rajvirsinh", email: "rajvirsinh@gmail.com" },
      { username: "Ashu", email: "ashu@gmail.com" },
      { username: "sara_connor", email: "sara@example.com" },
      { username: "dev_mike", email: "mike@example.com" },
    ];

    for (const user of defaultUsers) {
      // upsert creates the user if missing, or does nothing if already found
      await prisma.user.upsert({
        where: { username: user.username },
        update: {},
        create: user,
      });
    }

    console.log("✅ Initial users seeded successfully!");
  } catch (error) {
    console.error("⚠️ Error seeding users:", error.message);
  }
}

// Execute initial connection check and run server
initialDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
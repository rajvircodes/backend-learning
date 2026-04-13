# 📦 MongoDB Basics

This folder contains learning material, examples, and practice related to MongoDB.

---

## 🚀 What is MongoDB?

MongoDB is a **NoSQL database** that stores data in a **JSON-like format** called BSON (Binary JSON).

Unlike traditional SQL databases, MongoDB is:

* Schema-less (no fixed structure)
* Flexible and scalable
* Designed for modern applications

---

## 🧠 Key Concepts

### 1. Database

A container for collections.

👉 Example:

```
myDatabase
```

---

### 2. Collection

A group of MongoDB documents (like a table in SQL).

👉 Example:

```
users
notes
products
```

---

### 3. Document

A single record stored in BSON format (similar to JSON).

👉 Example:

```json
{
  "name": "Raj",
  "age": 22,
  "skills": ["JavaScript", "React"]
}
```

---

### 4. BSON (Binary JSON)

MongoDB stores data internally as BSON for better performance and flexibility.

---

## ⚡ Why MongoDB?

* No rigid schema (easy to change structure)
* High performance
* Scales horizontally
* Great for real-time apps

---

## 🔄 MongoDB vs SQL

| Feature       | MongoDB             | SQL Database  |
| ------------- | ------------------- | ------------- |
| Structure     | Document (JSON)     | Tables & Rows |
| Schema        | Dynamic             | Fixed         |
| Relationships | Embedded/Referenced | Joins         |
| Scalability   | Horizontal          | Vertical      |

---

## 🛠️ Basic Commands

### Show Databases

```js
show dbs
```

### Use/Create Database

```js
use myDatabase
```

### Create Collection

```js
db.createCollection("users")
```

---

## ✍️ CRUD Operations

### 🔹 Insert

```js
db.users.insertOne({
  name: "Raj",
  age: 22
})
```

---

### 🔹 Read

```js
db.users.find()
```

```js
db.users.find({ name: "Raj" })
```

---

### 🔹 Update

```js
db.users.updateOne(
  { name: "Raj" },
  { $set: { age: 23 } }
)
```

---

### 🔹 Delete

```js
db.users.deleteOne({ name: "Raj" })
```

---

## 🔗 Mongoose (Node.js ORM)

Mongoose is used to interact with MongoDB in Node.js.

### Install:

```bash
npm install mongoose
```

### Connect:

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/myDatabase")
  .then(() => console.log("Connected"))
  .catch(err => console.log(err));
```

---

## 📌 Schema vs Schema-less

Even though MongoDB is schema-less, tools like Mongoose allow us to define schemas:

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
```

---

## 🔥 Use Cases

* Social media apps
* Real-time analytics
* E-commerce platforms
* Content management systems

---

## 🧩 Best Practices

* Use indexes for faster queries
* Avoid deeply nested documents
* Use proper validation
* Keep documents small and optimized

---

## 📚 Summary

MongoDB is a powerful NoSQL database that provides flexibility, scalability, and speed, making it ideal for modern full-stack applications.

---

💡 *Tip: Practice CRUD operations regularly and integrate MongoDB with your backend projects for better understanding.*

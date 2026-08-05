# Prisma Basics

A beginner-friendly Prisma ORM practice project using **Node.js**, **TypeScript**, and **PostgreSQL**.

## Tech Stack

- Node.js
- TypeScript
- PostgreSQL
- Prisma ORM

---

## Prerequisites

- Node.js
- PostgreSQL
- Git

---

## Clone

```bash
git clone <your-repository-url>
cd prisma-basics
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment

Create a `.env` file in the project root.

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Sync Database

```bash
npx prisma db push
```

---

## Run Project

```bash
npm run dev
```

---

## Open Prisma Studio

```bash
npx prisma studio
```

---

## Project Structure

```
.
├── prisma/
│   └── schema.prisma
├── src/
│   └── index.ts
├── .env
├── package.json
└── tsconfig.json
```

---

## Useful Commands

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# Open Prisma Studio
npx prisma studio

# Format Prisma schema
npx prisma format

# Run project
npm run dev
```

---

## Learning Goals

- Configure Prisma
- Connect PostgreSQL
- Create Models
- Generate Prisma Client
- Push Schema
- Perform CRUD Operations
- Explore Data using Prisma Studio

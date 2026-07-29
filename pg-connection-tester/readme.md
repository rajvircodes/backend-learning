# Node.js + PostgreSQL Connection Pool Basics

This repository contains my foundational learning code for connecting a Node.js Express server to a PostgreSQL database using the `pg` library.

## What I Learned

- Setting up a resilient connection `Pool` using environment variables.
- Using `SELECT NOW()` as a connection test ping.
- Creating a safe database schema with `CREATE TABLE IF NOT EXISTS`.
- Preventing server duplicate key crashes using SQL constraints and `ON CONFLICT DO NOTHING`.
- Structuring files cleanly to avoid `dotenv` initialization order bugs.

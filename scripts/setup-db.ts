import sql from "@/lib/db"

async function setup() {
    try {
        await sql`CREATE DATABASE IF NOT EXISTS dream4u`
        console.log("Database created!")

        await sql`USE dream4u`
        console.log("Database in use!")

        await sql`CREATE TABLE IF NOT EXISTS users (
					  id SERIAL PRIMARY KEY,
					  username VARCHAR(255) NOT NULL,
					  email VARCHAR(255) NOT NULL UNIQUE,
					  password VARCHAR(255) NOT NULL,
					  image VARCHAR(255),
					  isAdmin BOOLEAN DEFAULT FALSE )`
        console.log("Table `users` created!")

        await sql`CREATE TABLE IF NOT EXISTS pending_users (
                            id SERIAL PRIMARY KEY,
                            username VARCHAR(255) NOT NULL,
                            email VARCHAR(255) NOT NULL UNIQUE,
                            password VARCHAR(255) NOT NULL,
                            token VARCHAR(255) NOT NULL,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP )`
        console.log("Table `pending_users` created!")


    } catch (e) {
        console.error("Something went wrong!", e)
}

setup()
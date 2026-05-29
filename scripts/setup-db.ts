import pool from "../lib/db"

async function setup() {
    try {
        await pool.query("CREATE DATABASE IF NOT EXISTS dream4u")
        console.log("Database created!")

        await pool.query("USE dream4u")
        console.log("Database in use!")

        await pool.query(`CREATE TABLE IF NOT EXISTS users (
                              id INT AUTO_INCREMENT PRIMARY KEY,
                              username VARCHAR(255) NOT NULL,
                              email VARCHAR(255) NOT NULL UNIQUE,
                              password VARCHAR(255) NOT NULL,
                              image VARCHAR(255),
                              isAdmin BOOLEAN DEFAULT FALSE
                         )
                         `)
        console.log("Table `users` created!")

        await pool.query(`CREATE TABLE IF NOT EXISTS pending_users (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            username VARCHAR(255) NOT NULL,
                            email VARCHAR(255) NOT NULL UNIQUE,
                            password VARCHAR(255) NOT NULL,
                            token VARCHAR(255) NOT NULL,
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                        )
                        `)
        console.log("Table `pending_users` created!")


    } catch (e) {
        console.error("Something went wrong!", e)

    } finally {
        await pool.end()
    }
}

setup()
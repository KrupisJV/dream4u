import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import crypto from "crypto"
import { sendVerificationEmail } from "@/lib/mailer"

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, email, password, confirmPassword } = body

        if (!username || !email || !password || !confirmPassword) {
            return Response.json({ message: "Please, fill out all the fields!" }, { status: 400 });
        }

        if (password.length < 8 || password.length > 16) {
            return Response.json({ message: "Password must be between 8 to 16 characters!" }, { status: 400 })
        }

        if (password !== confirmPassword) {
            return Response.json({ message: "Passwords do not match!" }, { status: 400 })
        }

        const [rows] = await pool.query("SELECT email FROM users WHERE email = ? UNION SELECT email FROM pending_users WHERE email = ?", [email, email]) as any[]

        if (rows.length > 0) {
            return Response.json({ message: "User already exists!" }, { status: 400 });
        }

        const token = crypto.randomBytes(32).toString("hex")
        const hash = await bcrypt.hash(password, 10)
        await pool.query("INSERT INTO pending_users (username, email, password, token) VALUES (?, ?, ?, ?)", [username, email, hash, token])
        await sendVerificationEmail(email, token)

        return Response.json({ message: "Success!" }, { status: 200 })

    } catch (error) {
        console.error(error)
        return Response.json({ message: "Server error" }, { status: 500 })
    }
}

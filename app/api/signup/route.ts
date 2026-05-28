import pool from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, email, password } = body

        if (!username || !email || !password) {
            return Response.json({ message: "Error, empty field!" }, { status: 400 });
        }

        const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]) as any[]

        if (rows.length > 0) {
            return Response.json({ message: "Error, user already exists!" }, { status: 400 });
        }

        const hash = await bcrypt.hash(password, 10)
        await pool.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, hash])

        return Response.json({ message: "Success!" }, { status: 200 })

    } catch (error) {
        console.error(error)
        return Response.json({ message: "Server error" }, { status: 500 })
    }
}

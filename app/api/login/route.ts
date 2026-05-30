import sql from "@/lib/db"
import bcrypt from "bcryptjs"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { sessionOptions, SessionData } from "@/lib/session"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, password } = body

        if (!email || !password) {
            return Response.json({ message: "Please, fill out all the fields!" }, { status: 400 })
        }

        const rows = await sql`SELECT * FROM users WHERE email = ${email}`
        if (rows.length === 0) {
            return Response.json({ message: "User not found!" }, { status: 400 })
        }

        const passwordMatch = await bcrypt.compare(password, rows[0].password)
        if (!passwordMatch) {
            return Response.json({ message: "Incorrect password!" }, { status: 400 })
        }

        const session = await getIronSession<SessionData>(await cookies(), sessionOptions)
        session.user = {
			id: rows[0].id,
			username: rows[0].username,
			email: rows[0].email,
			image: rows[0].image,
			isAdmin: rows[0].isAdmin
		}

        await session.save()

        return Response.json({ message: "Login Successful!" }, { status: 200 })

    } catch (e) {
        return Response.json({ message: "Server error!" }, { status: 500 })
    }
}
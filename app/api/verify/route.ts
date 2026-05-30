import sql from "@/lib/db"

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const token = searchParams.get("token")

        if (!token) {
            return Response.json({ message: "No token provided!" }, { status: 400 })
        }

        const rows = await sql`SELECT * FROM pending_users WHERE token = ${token}`
        if (rows.length === 0) {
            return Response.json({ message: "This token has expired!" }, { status: 400 })
        }

        await sql`INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${password})`
        await sql`DELETE FROM pending_users WHERE token = ${token}`

        return Response.redirect(new URL("/login", request.url))

    } catch (e) {
        return Response.json({ message: "Server error!" }, { status: 500 })
    }
}
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { sessionOptions, SessionData } from "@/lib/session"

export async function POST(request: Request) {
	const session = await getIronSession<SessionData>(await cookies(), sessionOptions)

	if (!session.user) {
		return Response.json({ message: "You are not logged in!" }, { status: 401 })
	}

	await session.destroy()
	return Response.json({ message: "Successfully logged out!" }, { status: 200 })
}
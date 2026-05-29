import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { sessionOptions, SessionData } from "@/lib/session"
import LoginForm from "@/components/loginForm"
import { redirect } from "next/navigation"

export default async function Login() {
    const session = await getIronSession<SessionData>(await cookies(), sessionOptions)

	if (session.user) {
		redirect("/")
	}

    return <LoginForm />
}
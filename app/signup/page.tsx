import { getIronSession } from "iron-session"
import { cookies } from "next/headers"
import { sessionOptions, SessionData } from "@/lib/session"
import { redirect } from "next/navigation"
import SignupForm from "@/components/signupForm"

export default async function SignUp() {
	const session = await getIronSession<SessionData>(await cookies(), sessionOptions)

	if (session.user) {
		redirect("/")
	}

	return <SignupForm />
}
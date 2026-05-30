"use client"

import { useRouter } from "next/navigation"

export default function LogoutButton() {
	const router = useRouter()

	const handleLogout = async (e: React.MouseEvent) => {
		const response = await fetch("/api/logout", {
			method: "POST"
		})

		if (response.ok) {
			router.push("/")
		}
	}

	return (
		<button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
			Log Out
	    </button>
	)
}
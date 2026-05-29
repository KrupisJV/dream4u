"use client"

import { useRouter } from "next/navigation"
import Link from "next/link";
import { useState } from "react"

export default function SignupForm() {
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [error, setError] = useState("")
	const router = useRouter()

	const handleSubmit = async (e) => {
	   e.preventDefault()

	   {/* Wait response from backend */}
	   const response = await fetch("/api/signup", {
		   method: "POST",
		   headers: { "Content-Type": "application/json" },
		   body: JSON.stringify({ username, email, password, confirmPassword })
	   })

	   const data = await response.json()
	   if (response.ok) {
		   router.push("/")

	   } else {
		   return setError(data.message)
	   }
	}

	return (
		<div className="min-h-screen bg-[#f8f1f4] py-10 px-4">
			<main className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">

				{/* Header */}
				<header className="flex flex-col items-center border-b border-pink-100 py-8">
					<div className="mb-2 text-6xl">👑</div>

					<Link href="/"><h1 className="text-6xl font-light tracking-wide text-[#7a2948]">
						Dream
					</h1></Link>

					<p className="mt-2 text-lg text-[#7a2948]">Dream 4U</p>
				</header>

				<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
					<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
						<form onSubmit={handleSubmit} className="space-y-6">

							<div>
								<label htmlFor="username" className="block text-sm/6 font-medium text-gray-700">
									Username
								</label>
								<div className="mt-2">
									<input
										id="username"
										type="text"
										name="username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-400 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm/6 font-medium text-gray-700">
									Your Email
								</label>
								<div className="mt-2">
									<input
										id="email"
										type="email"
										name="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-400 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label htmlFor="password" className="block text-sm/6 font-medium text-gray-700">
										Password
									</label>
								</div>
								<div className="mt-2">
									<input
										id="password"
										type="password"
										name="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-400 sm:text-sm/6"
									/>
								</div>
							</div>

							<div>
								<div className="flex items-center justify-between">
									<label htmlFor="confirm-password" className="block text-sm/6 font-medium text-gray-700">
										Confirm Password
									</label>
								</div>
								<div className="mt-2">
									<input
										id="confirm-password"
										type="password"
										name="confirm-password"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
										className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-pink-400 sm:text-sm/6"
									/>
								</div>
							</div>

							{error && <p className="text-red-500 text-sm">{error}</p>}

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-full bg-pink-400 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-pink-500"
								>
									Sign Up
								</button>
							</div>
						</form>

						<p className="mt-10 text-center text-sm/6 text-gray-500">
							Already have an account?{" "}
							<Link href="/login" className="font-semibold text-pink-500 hover:text-pink-400">
								Log In
							</Link>
						</p>
					</div>
				</div>

			</main>
		</div>
	)
}
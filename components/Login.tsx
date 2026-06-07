"use client";

import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#f8f1f4] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/d4u.png"
            alt="Dream 4U"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-3xl font-bold text-pink-500">
          Welcome Back
        </h1>

        <p className="mt-2 text-center text-gray-500">
          Sign in to your Dream 4U account
        </p>

        {/* Form */}
        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none transition focus:border-pink-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none transition focus:border-pink-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-pink-400 to-pink-500 py-3 font-semibold text-white shadow-md transition hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="font-medium text-pink-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
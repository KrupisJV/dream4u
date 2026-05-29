export const sessionOptions = {
    password: process.env.SESSION_PASSWORD as string,
    cookieName: "dream4u_session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production"
    }
}

export interface SessionData {
    user?: {
        id: number
        username: string
        email: string
        image: string
        isAdmin: boolean
    }
}
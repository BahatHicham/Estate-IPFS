import { SessionOptions } from "iron-session"

// Define an interface to specify the structure of session data
// This is useful for TypeScript to ensure type safety with session properties
export interface SessionData {
    userId?: string,
    username?: string,
    img?:string,
    // ispro?:boolean,
    isLoggedIn: boolean
}

// Define default values for the session, used as a starting point for new sessions
export const defaultSession : SessionData = {
    isLoggedIn: false
}

// Define the session options for iron-session
// This object configures the behavior and security of the session
export const sessionOptions : SessionOptions = {
    // Use a secure, secret key for encryption, retrieved from environment variables
    password : process.env.SECRET_KEY!,

     // Name of the cookie that stores session data on the client-side
    cookieName : "pinata-session",

    // Additional cookie options for security and privacy
    cookieOptions : {
        httpOnly : true, // Prevents JavaScript access to cookies on the client-side
        secure : process.env.NODE_ENV === "production",  // Only send cookies over HTTPS in production
    }
}

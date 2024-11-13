    "use server"
import { getIronSession } from "iron-session"
import { defaultSession, SessionData, sessionOptions } from "./lib"
import { cookies } from "next/headers"
import { userAgent } from "next/server"
import { redirect } from "next/navigation"


let username = "hicham"
// let isPro = true


// Function to retrieve or initialize a session for the user
export const getSession = async () => {

// Get the current session or create one if it doesn't exist, based on iron-session settings
 const session = await getIronSession<SessionData>(cookies(),sessionOptions)


    // If the session is not logged in, apply default session values
 if(!session.isLoggedIn) {
     session.isLoggedIn = defaultSession.isLoggedIn;
  }

  // Return the session data for further use
 return session;
}

// Function to handle login based on form data
export const login = async (
    prevState:{error:undefined | string}, // Holds any previous errors, for displaying login error feedback
    formData:FormData // The form data sent from the login form
     ) => {
    const session = await getSession() // Retrieve the session object for the user

    // Retrieve the username and password from the form submission
    const formUsername = formData.get("username") as string;
    const formPassword = formData.get("password") as string;

    // CHECK USER IN THE DB
    // const user = await db.getUser({username,password})

    if(formUsername !== username){
        return {error: 'Wrong Credentials'}
    }

    // Set session variables for an authenticated user
    session.userId="1";
    session.username = formUsername;
    // session.ispro = isPro;
    session.isLoggedIn = true;

    // Save the session and redirect the user to the home page
    await session.save()
    redirect('/')
}

// Function to handle logout and destroy the session
export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect('/');
}
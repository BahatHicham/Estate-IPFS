import { logout } from '@/action'
import React from 'react'



const LogoutForm = () => {
  return (
    <form action={logout}>
        <button
         className="w-100 btn btn-danger btn-md mt-12"
         style={{
           backgroundColor: "danger",
           fontWeight: "lighter",
           fontSize: "15px",
         }}
         >logout</button>
    </form>
  )
}

export default LogoutForm
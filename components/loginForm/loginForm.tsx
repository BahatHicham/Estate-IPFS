"use client"
import { login } from '@/action'
import React from 'react'
import { useFormState } from 'react-dom'
import '../../app/styles/loginform.scss'


const LoginForm = () => {

    const [state, formAction] = useFormState<any,FormData>(login, undefined)
  return (
    <form className='loginform' action={formAction}>
        <input type='text' className='username' name='username' required placeholder='username'/>
        <input type='password' className='password' name='password' required placeholder='password'/>
        <button  className="w-100 btn bg-dark text-light btn-md mt-12">Login</button>
        {state?.error && <p>{state.error}</p>}
    </form>
  )
}

export default LoginForm
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate =useNavigate()
    const submitHandler = ()=>{
        localStorage.setItem('user',JSON.stringify({role:'ADMIN'}) )
        navigate('/dashboard')
        }
        return (
            <div className="login">
                <h2>Welcome to login page! </h2>
                <p>Please loging to continue</p>
                <button onClick={submitHandler}> Login</button>
            </div>
        )
    
}

export default Login
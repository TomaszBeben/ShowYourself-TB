import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <>
            <div>
                <h2>Log In</h2>
                {error && <div>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div id='email'>
                        <label>Email</label>
                        <input type='email' ref={emailRef} required></input>
                    </div>
                    <div id='password'>
                        <label>Password</label>
                        <input type='password' ref={passwordRef} required></input>
                    </div>
                    <button disabled={loading} type='submit'>Log In</button>
                </form>
                <div>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                </div>
            </div>
            <div>
                Potrzebujesz konta? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}

export default Login

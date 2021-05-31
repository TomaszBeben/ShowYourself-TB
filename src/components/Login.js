import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Logo from './creator/header/Logo'


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
        <div className='auth__page'>
            <Logo/>
        <div className='auth__container'>
            <div className='auth__main'>
                <h2 className='auth__main--name'>Log In</h2>
                {error && <div className='auth__main--error'>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div id='email'>
                        <input className='auth__main--input' placeholder='EMAIL' type='email' ref={emailRef} required></input>
                    </div>
                    <div id='password'>
                        <input className='auth__main--input' placeholder='PASSWORD' type='password' ref={passwordRef} required></input>
                    </div>
                    <input className='auth__main--button' value='Log In' disabled={loading} type='submit' ></input>
                </form>
                <div>
                    <Link to='/forgot-password'>Forgot Password?</Link>
                </div>
            </div>
            <div className='auth__bottom'>
                Potrzebujesz konta? <Link to='/signup'>Sign Up</Link>
            </div>
            </div>
            </div>
        </>
    )
}

export default Login

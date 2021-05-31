import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Logo from './creator/header/Logo'


const ForgotPassword = () => {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <>
        <div className='auth__page'>
        <Logo/>
        <div className='auth__container'>
            <div className='auth__main'>
                <h2 className='auth__main--name'>Password Reset</h2>
                {error && <div>{error}</div>}
                {message && <div>{message}</div>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className='auth__main--input' placeholder='EMAIL' type='email' ref={emailRef} required></input>
                    </div>
                    <input className='auth__main--button' value='Reset Password' disabled={loading} type='submit'></input>
                </form>
                <div>
                    <Link to='/login'>Login</Link>
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

export default ForgotPassword


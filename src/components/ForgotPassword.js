import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


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
        } catch{
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <>
            <div>
                <div>
                    <h2>Password Reset</h2>
                    {error && <div>{error}</div>}
                    {message && <div>{message}</div>}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email</label>
                            <input type='email' ref={emailRef} required></input>
                        </div>
                        <button disabled={loading} type='submit'>Reset Password</button>
                    </form>
                    <div>
                        <Link to='/login'>Login</Link>
                    </div>
                </div>
            </div>
            <div>
                Potrzebujesz konta? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}

export default ForgotPassword


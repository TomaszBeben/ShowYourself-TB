import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Signup = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            <div>
                <h2>Sign Up</h2>
                {error && <div>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div id='email'>
                        <label>Email</label>
                        <input type='email' ref={emailRef} required></input>
                    </div>
                    <div id='password'>
                        <div>Password</div>
                        <input type='password' ref={passwordRef} required></input>
                    </div>
                    <div id='password-confirm'>
                        <label>Password Confirmation</label>
                        <input type='password' ref={passwordConfirmRef} required></input>
                    </div>
                    <button disabled={loading} type='submit'>Sign Up</button>
                </form>
            </div>
            <div>
                Mosz juz konto? <Link to='/login'>Log in</Link>
            </div>
        </>
    )
}

export default Signup

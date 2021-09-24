import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import Logo from '../main/header/Logo'

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
        <div className='auth__page'>
            <Logo/>
        <div className='auth__container'>
            <div>
                <h2 className='auth__main--name'>Sign Up</h2>
                {error && <div className='auth__main--error'>{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div id='email'>
                        <input className='auth__main--input' placeholder='EMAIL' type='email' ref={emailRef} required></input>
                    </div>
                    <div id='password'>
                        <input className='auth__main--input' placeholder='PASSWORD' type='password' ref={passwordRef} required></input>
                    </div>
                    <div id='password-confirm'>
                        <input className='auth__main--input' placeholder='PASSWORD-Confirmation' type='password' ref={passwordConfirmRef} required></input>
                    </div>
                    <input className='auth__main--button' value='Sign Up' disabled={loading} type='submit'></input>
                </form>
            </div>
            <div className='auth__bottom'>
                Mosz juz konto? <Link to='/login'>Log in</Link>
            </div>
            </div>
            </div>
        </>
    )
}

export default Signup

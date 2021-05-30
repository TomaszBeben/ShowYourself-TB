import React, { useState, useEffect } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { useHistory } from 'react-router-dom'

const UserCheck = () => {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()

    const [user, setUser] = useState('')
    const [inOrOut, setINOrOut] = useState('Log In')

    const history = useHistory()

    const check = () => inOrOut === 'Log Out' ? null : history.push('/login')

    async function handleLogout() {
        setError('')
        try {
            await logout()
            check()
        } catch {
            setError('Filed to log out')
        }
    }

    useEffect(() => {
        if (currentUser !== null) {
            setUser(currentUser.email)
            setINOrOut('Log Out')
        } else {
            setUser('')
            setINOrOut('Log In')
        }
    }, [currentUser])


    return (
        <>
            <div classname='main-page__header--user-container'>
                <div className='main-page__header--user'>
                    {user}
                    <strong>  {`<<EMAIL`}</strong>
                </div>
                <div>
                    <button onClick={handleLogout}>
                        {inOrOut}
                    </button>
                </div>
            </div>
        </>
    )
}

export default UserCheck

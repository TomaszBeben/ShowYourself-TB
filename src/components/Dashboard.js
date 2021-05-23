import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory, Link } from 'react-router-dom'

const Dashboard = () => {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()

    const[user, setUser] = useState('')
    const[inOrOut, setINOrOut] = useState('Log In')
    const history  = useHistory()

    async function handleLogout() {
        setError('')

        try{
            await logout()
            history.push('/login')
        }catch{
            setError('Filed to log out')
        }
    }

    function loginVerify (){
        if(currentUser !== null){
            setUser(currentUser.email)
            setINOrOut('Log Out')
        }else{
            setUser('test')
            setINOrOut('Log In')
        }
    }
    setInterval(loginVerify, 500) //do poprawki !!!!!!!!!
    return (
        <>
            <div>
                <div>
                    <h2>
                        Profile
                    </h2>
                    {error && <div>{error}</div>}
                    <strong>Email: </strong>
                    {user}
                </div>
            </div>
            <div>
                <button onClick={handleLogout}>
                    {inOrOut}
                </button>
            </div>
            <Link to='/test'>Test Component</Link>
        </>
    )
}

export default Dashboard

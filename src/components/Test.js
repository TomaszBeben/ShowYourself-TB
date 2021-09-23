import React from 'react'
import { useAuth } from '../context/AuthContext'

const Test = () => {
    const {currentUser} = useAuth()
    console.log(currentUser);

    return (
        <>
            {currentUser.email}
        </>
    )
}

export default Test



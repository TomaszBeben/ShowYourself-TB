import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Basics = () => {
    const { postData } = useAuth()
    return (
        <>
        {postData.file ? <img alt='' src={postData.file} style={{ width: '50px', height: '50px', borderRadius: '50%' }}/> : null}
            <p>{postData.name}</p>
            <p>{postData.surname}</p>
            <p>{postData.dateOfBirth}</p>
            <p>{postData.country}</p>
            <p>{postData.city}</p>
            <p>{postData.phone}</p>
            <p>{postData.email}</p>
            <p>{postData.zipCode}</p>
        </>
    )
}

export default Basics

import React from 'react'
import { useAuth } from '../../../../context/AuthContext'
//Creator View Folder

const Consent = () => {
    const { postData } = useAuth()
    return (
        <>
          <p>{postData.consent}</p>
        </>
    )
}

export default Consent
import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Consent = () => {
    const { postData } = useAuth()
    return (
        <div className='pattern2--rightSide_consent--container'>
          <p className='pattern2--rightSide_consent'>{postData.consent}</p>
        </div>
    )
}

export default Consent
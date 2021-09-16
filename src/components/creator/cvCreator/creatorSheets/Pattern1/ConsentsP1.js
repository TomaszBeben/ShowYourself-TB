import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Consent = () => {
  const { postData } = useAuth()
  return (
    <>
        <div className='pattern1--rightSide_consent--container'>
          <p className='pattern1--rightSide_consent'>{postData.consent}</p>
        </div>
    </>
  )
}

export default Consent
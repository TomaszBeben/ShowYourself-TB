import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'

const DescriptionP2 = () => {
    const { postData } = useAuth()
    return (
        <>
        <div className='pattern1--rightSide_description--container'>
          <p className='pattern1--rightSide_description'>{postData.description}</p>
        </div>
    </>
    )
}

export default DescriptionP2
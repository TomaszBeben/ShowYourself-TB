import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const PictureP1 = () => {
    const { postData } = useAuth()
    return (
        <>
            {postData.file ? <img alt='' src={postData.file} style={{ width: '50px', height: '50px', borderRadius: '50%' }}/> : null}
        </>
    )
}

export default PictureP1
import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const PictureP2 = () => {
    const { postData, color } = useAuth()
    return (
        <>
            {
                postData.file ?
                    <div className='pattern2--container_photo'>
                        <div className='pattern2--container_photo--border_outside'>
                            <img
                            style={{ border:`5px outset ${color}` }}
                            className='pattern2--picture'
                            alt=''
                            src={postData.file} />
                        </div>
                    </div> : null
            }
        </>
    )
}

export default PictureP2
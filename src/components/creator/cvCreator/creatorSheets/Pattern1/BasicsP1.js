import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Basics = () => {
    const { postData, color } = useAuth()
    return (
        <>
            <p className='pattern1--basics_name'>{postData.name} {postData.surname}</p>
            <div className='pattern1--basics_picture--container'>
                {postData.file ?
                    <img alt='' src={postData.file} className='pattern1--basics_picture' style={{ width: '60mm', height: '80mm' }} />
                    : null}
            </div>
            <div style={{backgroundColor: `${color}`}} className='pattern1--basics_birthday--container'>
                <p className='pattern1--basics_birthday--header'>Birthday: </p>
                <p className='pattern1--basics_birthday'>{postData.dateOfBirth}</p>
            </div>
            <div>
                <p>{postData.country}</p>
            </div>
            <div>
                <p>{postData.city} {postData.zipCode}</p>
            </div>
            <div>
                <p>{postData.phone}</p>
            </div>
            <div>
                <p>{postData.email}</p>
            </div>
        </>
    )
}

export default Basics

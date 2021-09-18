import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Basics = () => {
    const { postData, color } = useAuth()
    return (
        <>
            <div style={{ backgroundColor: `${color}` }} className='pattern1--leftSide_darker--container'>
                <p className='pattern1--leftSide_name'>{postData.name} {postData.surname}</p>
            </div>
            {postData.file !== '' ?
                <div className='pattern1--leftSide_picture--container'>
                    <img alt='' src={postData.file} className='pattern1--leftSide_picture' style={{ width: '60mm', height: '80mm' }} />
                </div> : null
            }

            <div style={{ backgroundColor: `${color}` }} className='pattern1--leftSide_darker--container'>
                {(postData.email || postData.phone !== '' ? <p className='pattern1--leftSide_text--header'>Contact: </p> : null)}
                <p className='pattern1--leftSide_text'>{postData.email}</p>
                <p className='pattern1--leftSide_text'>{postData.phone}</p>
            </div>

            <div style={{ backgroundColor: `${color}` }} className='pattern1--leftSide_darker--container'>
                {(postData.city || postData.zipCode || postData.country !== '' ? <p className='pattern1--leftSide_text--header'>Address: </p> : null)}
                <p className='pattern1--leftSide_text'>{postData.city} {postData.zipCode}</p>
                <p className='pattern1--leftSide_text'>{postData.country}</p>
            </div>

            <div style={{ backgroundColor: `${color}` }} className='pattern1--leftSide_darker--container'>
                {postData.dateOfBirth !== '' ? <p className='pattern1--leftSide_text--header'>Birthday: </p> : null}
                <p className='pattern1--leftSide_text'>{postData.dateOfBirth}</p>
            </div>
        </>
    )
}

export default Basics

import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CakeIcon from '@mui/icons-material/Cake';
//Creator View Folder

const Basics = () => {
    const { postData } = useAuth()
    return (
        <div className='pattern2--container_basics'>
            <div className='pattern2--basics_name--container'>
                <p className='pattern2--basics_name'>{postData.name} {postData.surname}</p>
                <p className='pattern2--basics_role'>{postData.role}</p>
            </div>
            <div className='pattern2--container_contact'>

                <div className='pattern2--contact_elem'>
                    {(postData.email !== '' ?
                    <div className='pattern2--contact_elem--icon'><EmailIcon /></div>
                    : null)}
                    <p className='pattern2--contact'>{postData.email}</p>
                </div>

                <div className='pattern2--contact_elem'>
                    {(postData.phone !== '' ?
                    <div className='pattern2--contact_elem--icon'><PhoneAndroidIcon /> </div>
                    : null)}
                    <p className='pattern2--contact'>{postData.phone}</p>
                </div>

                <div className='pattern2--contact_elem'>
                    {(postData.dateOfBirth !== '' ?
                    <div className='pattern2--contact_elem--icon'><CakeIcon /> </div>
                    : null)}
                    <p className='pattern2--contact'>{postData.dateOfBirth}</p>
                </div>

            </div>
            {/* <div className=''>
                {(postData.city || postData.zipCode || postData.country !== '' ? <p className=''>Address: </p> : null)}
                <p className=''>{postData.city} {postData.zipCode}</p>
                <p className=''>{postData.country}</p>
            </div>
            <div className=''>
                {postData.dateOfBirth !== '' ? <p className=''>Birthday: </p> : null}
                <p className=''>{postData.dateOfBirth}</p>
            </div> */}
        </div>
    )
}

export default Basics

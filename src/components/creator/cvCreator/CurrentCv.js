import React from 'react'
// import { useAuth } from '../../../context/AuthContext'

const CurrentCv = ({ postData }) => {
    // const { color, setColor, sheetStyle, setSheetStyle } = useAuth()
    return (
        <div>
                    <p>{postData.name}</p>
                    <p>{postData.surname}</p>
                    <p>{postData.dateOfBirth}</p>
                    <p>{postData.country}</p>
                    <p>{postData.city}</p>
                    <p>{postData.phone}</p>
                    <p>{postData.zipCode}</p>
                    <p>{postData.consent}</p>
        </div>
    )
}

export default CurrentCv

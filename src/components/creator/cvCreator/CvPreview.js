import React from 'react'
import { Paper } from '@material-ui/core';

const CvPreview = ({ postData }) => {
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

export default CvPreview

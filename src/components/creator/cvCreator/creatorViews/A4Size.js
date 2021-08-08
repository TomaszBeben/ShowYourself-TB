import React from 'react'
import useStyles from '../styles'
import { Box } from '@material-ui/core';
import { optionsVariable } from './selectOptions';



const A4Size = ({ postData }) => {
    const classes = useStyles()

    return (
        <>
            <div>
                <select>
                    {optionsVariable.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
                {/* how to select option ? */}
            </div>
            <Box className='A4Size' >
                <div>
                    <p>{postData.name}</p>
                    <p>{postData.surname}</p>
                    <p>{postData.dateOfBirth}</p>
                    <p>{postData.country}</p>
                    <p>{postData.city}</p>
                    <p>{postData.phone}</p>
                    <p>{postData.zipCode}</p>
                    <p>{postData.education.first.degree}</p>
                    <p>{postData.education.first.school}</p>
                    <p>{postData.education.first.city}</p>
                    <p>{postData.education.first.start}</p>
                    <p>{postData.education.first.end}</p>
                    <p>{postData.experience.first.position}</p>
                    <p>{postData.education.first.description}</p>
                </div>
            </Box>
        </>

    )
}

export default A4Size

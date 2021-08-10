import React from 'react'
import useStyles from '../styles'
import { Paper } from '@material-ui/core';



const A4Size = ({ postData }) => {
    const classes = useStyles()

    return (
        <>
            <Paper className={classes.A4Paper} >
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
            </Paper>
        </>

    )
}

export default A4Size

import React from 'react'
import useStyles from '../styles'
import { Paper } from '@material-ui/core';
import CvPreview from '../CvPreview';



const A4Size = ({ postData }) => {
    const classes = useStyles()

    return (
        <>
            <Paper className={classes.A4Paper} >
                <CvPreview postData={postData}/>
            </Paper>
        </>

    )
}

export default A4Size

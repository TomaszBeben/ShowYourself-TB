import React from 'react'
import useStyles from '../styles'
import { Paper } from '@material-ui/core';
import CurrentCv from '../CurrentCv';



const A4Size = ({ postData }) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.breakpointHide}>
                <Paper className={classes.A4Paper} >
                    <CurrentCv postData={postData} />
                </Paper>
            </div>
        </>

    )
}

export default A4Size

import React from 'react'
import creatorViewStyles from '../styles/creatorViewStyles'
import { Paper } from '@material-ui/core';
import CurrentCv from '../CurrentCv';



const A4Size = ({ postData }) => {
    const classes = creatorViewStyles()
    return (
        <>
            <div className={classes.breakpointHide}>
                <div className={classes.sizingView}>
                    <Paper className={classes.A4Paper} >
                        <CurrentCv postData={postData} />
                    </Paper>
                </div>
            </div>
        </>

    )
}

export default A4Size

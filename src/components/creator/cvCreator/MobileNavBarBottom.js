import React from 'react'
import { Paper } from '@material-ui/core';
import mobileNavStyles from './styles/mobileNavStyles'

const MobileNavBarBottom = () => {
    const classes = mobileNavStyles()
    return (
        <div>
            <Paper className={classes.viewHeader}>
                text
            </Paper>
        </div>
    )
}

export default MobileNavBarBottom

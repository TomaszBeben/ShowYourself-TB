import React from 'react'
import { Paper } from '@material-ui/core';
import useStyles from './styles'

const MobileNavBar = ({hideElem}) => {
    const classes = useStyles()
    return (
        <div>
            <Paper className={classes.viewHeader}>
                
            </Paper>
        </div>
    )
}

export default MobileNavBar

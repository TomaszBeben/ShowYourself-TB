import React from 'react'
import { Link }from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetView, getPost } from '../../../api/index'

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'

const CreatorMenu = () => {

    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Paper className={classes.menuContainer}>
            <Link to='/'><button>home</button></Link>
            <button onClick={()=>{window.location.reload()}} >reload</button>
            <button onClick={()=>{dispatch(getPost())}} >getState</button>
            <button onClick={()=>{dispatch(resetView())}} >eraseState</button>
        </Paper>
    )
}

export default CreatorMenu

import React from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { resetView, getPost } from '../../../api/index'

import { Button, Paper } from '@material-ui/core';
import useStyles from './styles'

const CreatorMenu = () => {

    const classes = useStyles()
    // const dispatch = useDispatch()

    return (
        <Paper className={classes.menuContainer}>
            <div>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" fullWidth>home</Button>
                </Link>
            </div>
            <div>
                <Link to='/cvcreator/basics' style={{ textDecoration: 'none' }}>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" fullWidth>Basics</Button>
                </Link>
                <Link to='/cvcreator/edu' style={{ textDecoration: 'none' }}>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" fullWidth>education</Button>
                </Link>
                <Link to='/cvcreator/work' style={{ textDecoration: 'none' }}>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" fullWidth>work experience</Button>
                </Link>
                <Link to='/cvcreator/skills' style={{ textDecoration: 'none' }}>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" fullWidth>skills</Button>
                </Link>
            </div>
            <div>
                <Link to='/cvcreator/end' style={{ textDecoration: 'none' }}>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" fullWidth>end</Button>
                </Link>
            </div>
            {/* <Button onClick={() => { window.location.reload() }} >reload</Button>
            <Button onClick={() => { dispatch(getPost()) }} >getState</Button>
            <Button onClick={() => { dispatch(resetView()) }} >eraseState</Button> */}
        </Paper>
    )
}

export default CreatorMenu

import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Paper } from '@material-ui/core'
import useStyles from './styles'

const CreatorMenu = () => {
    const classes = useStyles()
    const paths = [
        {
            path: '/cvcreator/basics',
            label: 'Basics'
        },
        {
            path: '/cvcreator/edu',
            label: 'Education'
        },
        {
            path: '/cvcreator/work',
            label: 'Work'
        },
        {
            path: '/cvcreator/skills',
            label: 'Skill'
        },
    ]

    return (
        <Paper className={classes.menuContainer}>
            <div>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button className={`buttonAccept ${classes.buttonSubmit}`} variant="contained" size="large" fullWidth>home</Button>
                </Link>

            </div>
            <div>
                {paths.map((p) => (
                    <Link to={p.path} style={{ textDecoration: 'none' }}>
                        <Button className={`buttonAccept ${classes.buttonSubmit}`} variant="contained" size="large" fullWidth>{p.label}</Button>
                    </Link>
                ))}
            </div>
            <div>
                <Link to='/cvcreator/end' style={{ textDecoration: 'none' }}>
                    <Button className={`buttonAccept ${classes.buttonSubmit}`} variant="contained" size="large" fullWidth>end</Button>
                </Link>
            </div>
        </Paper>
    )
}

export default CreatorMenu

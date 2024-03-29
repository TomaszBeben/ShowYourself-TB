import React from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Link } from 'react-router-dom'
import { paths } from './variables'

import { Button, Paper } from '@material-ui/core'
import creatorMenuStyles from './styles/creatorMenuStyles'

const CreatorMenu = () => {
    const { hideMobileMenu, setHideMobileMenu} = useAuth()
    const classes = creatorMenuStyles()

    return (
        <Paper onClick={()=>{setHideMobileMenu('hideMobileMenu')}} className={ `${classes.menuContainer} ${hideMobileMenu}` }>
            <div className={ `${classes.menuInvisibleDiv} ${hideMobileMenu}` }></div>
            <div>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" fullWidth>home</Button>
                </Link>
            </div>
            <div>
                {paths.map((p, index) => (
                    <Link key={index} to={p.path} style={{ textDecoration: 'none' }}>
                        <Button className={classes.buttonSubmit} size="large" fullWidth>{p.label}</Button>
                    </Link>
                ))}
            </div>
            <div>
                <Link to='/cvcreator/end' style={{ textDecoration: 'none' }}>
                    <Button className={classes.buttonSubmit} variant="contained" size="large" fullWidth>end</Button>
                </Link>
            </div>
        </Paper>
    )
}

export default CreatorMenu

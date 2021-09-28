import React from 'react'

import Logo from '../../main/header/Logo'
// import { Paper } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import mobileNavStyles from './styles/mobileNavStyles'

const MobileNavBarTop = () => {
    const classes = mobileNavStyles()
    return (
        <div className={classes.topBar}>
            <div style={{ marginLeft: '1rem', marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
                <MenuIcon />
            </div>
            <Logo />
        </div>
    )
}

export default MobileNavBarTop

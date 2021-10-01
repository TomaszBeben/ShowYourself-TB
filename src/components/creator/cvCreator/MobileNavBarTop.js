import React from 'react'

import { useAuth } from '../../../context/AuthContext'
import Logo from '../../main/header/Logo'
// import { Paper } from '@material-ui/core';
// import MenuIcon from '@mui/icons-material/Menu';
import AlignHorizontalLeftRoundedIcon from '@mui/icons-material/AlignHorizontalLeftRounded';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import mobileNavStyles from './styles/mobileNavStyles'

const MobileNavBarTop = () => {
    const classes = mobileNavStyles()
    const { hideMobileMenu, setHideMobileMenu } = useAuth()

    const toggle = () => hideMobileMenu === 'hideMobileMenu' ? setHideMobileMenu('') : setHideMobileMenu('hideMobileMenu')

    return (
        <div className={classes.topBar}>
            <div onClick={() => { toggle() }} style={{ marginLeft: '1rem', marginRight: '1rem', display: 'flex', alignItems: 'center' }}>
                <AlignHorizontalLeftRoundedIcon />
            </div>
            <Logo />
        </div>
    )
}

export default MobileNavBarTop
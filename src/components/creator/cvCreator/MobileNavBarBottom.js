import React from 'react'
import mobileNavStyles from './styles/mobileNavStyles'
import AlignHorizontalRightRoundedIcon from '@mui/icons-material/AlignHorizontalRightRounded';
import { useAuth } from '../../../context/AuthContext'

const MobileNavBarBottom = () => {
    const classes = mobileNavStyles()
    const {hideMobileNav, setHideMobileNav } = useAuth()

    const toggle = () => hideMobileNav === 'hideMobileMenu' ? setHideMobileNav('') : setHideMobileNav('hideMobileMenu')
    return (
        <div >
            <div className={classes.bottomBar}>
                <div>
                <div className='main-page__footer__container--left'>
                        <a href='https://tbebenportfolio.web.app/#/'>
                            <div className='main-page__footer--elem footer-portfolio'></div>
                        </a>
                        <a href='https://github.com/TomaszBeben'>
                            <div className='main-page__footer--elem footer-github'></div>
                        </a>
                        <a href='https://www.linkedin.com/in/tomasz-b%C4%99ben-1944021a2/'>
                            <div className='main-page__footer--elem footer-linkedin'></div>
                        </a>
                </div>
                </div>
                <div onClick={setHideMobileNav('')} style={{ marginLeft: '1rem', marginRight: '1rem', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <AlignHorizontalRightRoundedIcon />
                </div>
            </div>
        </div>
    )
}

export default MobileNavBarBottom

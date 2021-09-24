import React from 'react'

import UserCheck from './UserCheck'
import Logo from './Logo'

const Header = () => {
    return (
        <div className='main-page__header'>
            <Logo/>
            <UserCheck/>
        </div>
    )
}

export default Header

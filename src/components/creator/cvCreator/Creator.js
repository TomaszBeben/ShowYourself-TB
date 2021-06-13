import React, { useEffect } from 'react'
import CreatorForm from './CreatorForm'
import CreatorMenu from './CreatorMenu'
import CreatorView from './CreatorView'
import {useAuth} from '../../../context/AuthContext'

const Creator = () => {

    const { currentUser } = useAuth()
    useEffect(()=>{
        localStorage.setItem('currentUser', currentUser.email)
    },[currentUser])

    const style= {
        width: '100vw',
        heigth: '100vh',
        display: 'flex',
        flexDirection: 'row'
    }

    return (
        <div style={style}>
            <CreatorMenu/>
            <CreatorForm/>
            <CreatorView/>
        </div>
    )
}

export default Creator

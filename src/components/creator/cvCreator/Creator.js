import React from 'react'
import CreatorForm from './CreatorForm'
import CreatorMenu from './CreatorMenu'
import CreatorView from './CreatorView'

const Creator = () => {

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

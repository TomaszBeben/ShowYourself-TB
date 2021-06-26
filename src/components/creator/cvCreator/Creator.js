import React, { useEffect, useState } from 'react'
import CreatorForm from './CreatorForm'
import CreatorMenu from './CreatorMenu'
import CreatorView from './CreatorView'
import { useDispatch } from 'react-redux'
import { getPost } from '../../../api/index'

const Creator = () => {
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPost())
    },[currentId, dispatch])

    const style= {
        width: '100vw',
        heigth: '100vh',
        display: 'flex',
        flexDirection: 'row'
    }

    return (
        <div style={style}>
            <CreatorMenu/>
            <CreatorForm setCurrentId={setCurrentId} currentId={currentId} />
            <CreatorView setCurrentId={setCurrentId}/>
        </div>
    )
}

export default Creator

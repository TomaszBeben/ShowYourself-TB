import React from 'react'
import { Link }from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetView, getPost } from '../../../api/index'
import { useClearCache } from 'react-clear-cache';


const CreatorMenu = () => {
    const { emptyCacheStorage } = useClearCache();
    const dispatch = useDispatch()
    const style = {
        height: '100vh',
        width: '20vw',
        border: '1px solid black'
    }

    return (
        <div style={style}>
            <Link to='/'><button>home</button></Link>
            <button onClick={()=>{window.location.reload()}} >reload</button>
            <button onClick={()=>{dispatch(getPost())}} >getState</button>
            <button onClick={()=>{dispatch(resetView())}} >eraseState</button>
            <button onClick={()=>{emptyCacheStorage();}} >clearCache</button>
        </div>
    )
}

export default CreatorMenu

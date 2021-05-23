import React from 'react'
import { useHistory } from 'react-router-dom'

const Test = () => {
    const history = useHistory()
    const style = {
        border: '1px solid black',
        width: '100px',
        height: '100px'
    }
    return (
        <>
        <div style={style}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit?
        </div>
        <button onClick={()=> history.goBack()} >wstecz</button>
        </>
    )
}

export default Test

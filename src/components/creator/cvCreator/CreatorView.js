import React from 'react'
import { useSelector } from 'react-redux'

const CreatorView = () => {
    const style = {
        height: '100vh',
        width: '35vw',
        border: '1px solid black'
    }

    const view = useSelector((state)=> state.posts)
    console.log(view);

    return (
        <div style={style}>
            {view.map((post)=>(
                <div key={post.id}>
                    <h1>{post.name}</h1>
                    <h1>{post.surname}</h1>
                    <img style={{width:'100px', height:'100px'}} src={post.file} />
                </div>
            ))}
        </div>
    )
}

export default CreatorView

/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { useAuth } from '../../../context/AuthContext'
import { useSelector } from 'react-redux'

const CreatorView = () => {
    const posts = useSelector((state) => state.posts)
    const { currentUser } = useAuth()

    const cvcontainer = {
        width: '200px',
        height: '200px'
    }

    return (
        !posts.length ? <CircularProgress /> : (
            <div>
                {posts.map((post) => (
                    <div key={post._id} style={cvcontainer} >
                        <p>{post.name}</p>
                        <p>{post.surname}</p>
                        <img src={post.file} alt={currentUser.mail} style={{ width: '100px', height: '100px' }} />
                    </div>
                ))}
            </div>
        )
    )
}

export default CreatorView

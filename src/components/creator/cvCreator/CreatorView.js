import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { useAuth } from '../../../context/AuthContext'
import { useSelector, useDispatch } from 'react-redux'

import { deletePost } from '../../../api'

const CreatorView = ({ setCurrentId }) => {

    const dispatch = useDispatch()
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
                        <div>
                            <button onClick={() => setCurrentId(post._id)} >EDIT</button>
                            <button onClick={() => {
                                if (window.confirm('Are you sure you want to delete this post?')) {
                                    dispatch(deletePost(post._id))
                                    console.log('Post Deleted!');
                                }
                            }}>DELETE</button>
                        </div>
                        <img src={post.file} alt={currentUser.mail} style={{ width: '100px', height: '100px' }} />
                        <p>{post.currentUser}</p>
                        <p>{post.name}</p>
                        <p>{post.surname}</p>
                        <p>{post.country}</p>
                        <p>{post.city}</p>
                        <p>{post.phone}</p>
                        <p>{post.email}</p>
                        <p>{post.zipCode}</p>
                    </div>
                ))}
            </div>
        )
    )
}

export default CreatorView

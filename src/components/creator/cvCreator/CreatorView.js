/* eslint-disable react-hooks/exhaustive-deps */
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


    //confirmation window test
    //'Are you sure you want to delete this post?'
    //dispatch(deletePost(post._id))
    return (
        !posts.length ? <CircularProgress /> : (
            <div>
                {posts.map((post) => (
                    <div key={post._id} style={cvcontainer} >
                        <p>{post.name}</p>
                        <p>{post.surname}</p>
                        <img src={post.file} alt={currentUser.mail} style={{ width: '100px', height: '100px' }} />
                        <button onClick={() => setCurrentId(post._id)} >EDIT</button>
                        <button onClick={() => {
                            if(window.confirm('Are you sure you want to delete this post?')){
                                dispatch(deletePost(post._id))
                                console.log('Post Deleted!');
                            }
                        }}>DELETE</button>
                    </div>
                ))}
            </div>
        )
    )
}

export default CreatorView

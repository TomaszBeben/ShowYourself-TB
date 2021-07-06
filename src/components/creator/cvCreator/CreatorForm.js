import React, { useState, useEffect, useRef } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../../api/index'
import { useAuth } from '../../../context/AuthContext'

const style = {
    height: '100vh',
    width: '45vw',
    border: '1px solid black',
    fontSize: '1rem',
}

const formStyle = {
    display: 'flex',
    flexDirection: 'column'
}

const CreatorForm = ({ currentId, setCurrentId }) => {
    
    const { currentUser } = useAuth()
    const initialState = {
        currentUser: currentUser.email,
        name: '',
        surname: '',
        file: ''
    }
    const [postData, setPostData] = useState(initialState)
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()
    const userRef = useRef()

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        setPostData(initialState)
        setCurrentId(null)
    }

    return (
        <div style={style}>
            <h1 ref={userRef} >{currentUser.email}</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input type="hidden" value={postData.currentUser} />
                <input type="text" placeholder='name' value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
                <input type="text" placeholder='surname' value={postData.surname} onChange={(e) => setPostData({ ...postData, surname: e.target.value })} />
                <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default CreatorForm

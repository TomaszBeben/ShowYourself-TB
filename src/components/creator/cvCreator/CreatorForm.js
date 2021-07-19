import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../../api/index'
import { useAuth } from '../../../context/AuthContext'
import { initialState } from './variables'

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
    const [postData, setPostData] = useState(initialState(currentUser))
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const dispatch = useDispatch()

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
        setPostData(initialState(currentUser))
        setCurrentId(null)
    }

    //
    //
    //
    /// trzeba zerknąć jak wygladaja schematy baz danych mongoDB
    //
    //
    //
    return (
        <div style={style}>
            <h1>{currentUser.email}</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input type="hidden" value={postData.currentUser} />
                {/* basics info */}
                <input type="text" placeholder='name' value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
                <input type="text" placeholder='surname' value={postData.surname} onChange={(e) => setPostData({ ...postData, surname: e.target.value })} />
                <input type="date" placeholder='dateOfBirth' value={postData.dateOfBirth} onChange={(e) => setPostData({ ...postData, dateOfBirth: e.target.value })} />
                <input type="text" placeholder='country' value={postData.country} onChange={(e) => setPostData({ ...postData, country: e.target.value })} />
                <input type="text" placeholder='city' value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })} />
                <input type="number" placeholder='phone' value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} />
                <input type="email" placeholder='email' value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
                <input type="text" placeholder='post code' value={postData.zipCode} onChange={(e) => setPostData({ ...postData, zipCode: e.target.value })} />
                {/* education */}
                <input type="text" placeholder='degree' value={postData.education.first.degree} onChange={(e) => setPostData({...postData, education: {...postData.education, first:{...postData.education.first, degree: e.target.value}}})}/>
                 <input type="text" placeholder='school' value={postData.education.first.school} onChange={(e) => setPostData({...postData, education: {...postData.education, first:{...postData.education.first, school: e.target.value}}})}/>
                <input type="text" placeholder='city' value={postData.education.first.city} onChange={(e) => setPostData({...postData, education: {...postData.education, first:{...postData.education.first, city: e.target.value}}})}/>
                <input type="date" placeholder='start' value={postData.education.first.start} onChange={(e) => setPostData({...postData, education: {...postData.education, first:{...postData.education.first, start: e.target.value}}})}/>
                <input type="date" placeholder='end' value={postData.education.first.end} onChange={(e) => setPostData({...postData, education: {...postData.education, first:{...postData.education.first, end: e.target.value}}})}/>
                <input type="text" placeholder='description' value={postData.education.first.description} onChange={(e) => setPostData({...postData, education: {...postData.education, first:{...postData.education.first, description: e.target.value}}})}/>
                <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} />
                {/* experience */}
                <input type="submit" />
            </form>
        </div>
    )
}

export default CreatorForm

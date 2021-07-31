import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import Basics from './creatorForms/Basics'
import Education from './creatorForms/Education'
import Skills from './creatorForms/Skills'
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
    const [skills, setSkills] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        if (post) {
            setPostData(post);
            setSkills(post.skills);
        }
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault()
        setPostData({ ...postData, skills: skills })
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        setPostData(initialState(currentUser))
        setSkills([])
        setCurrentId(null)
    }

    return (
        <div style={style}>
            {/* <h1>{currentUser.email}</h1> */}
            <form style={formStyle} onSubmit={handleSubmit}>
                {/* photo */}
                <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} />

                {/* basics info */}
                <Basics postData={postData} setPostData={setPostData} />

                {/* education */}
                <Education postData={postData} setPostData={setPostData} />

                {/* skills */}
                <Skills skills={skills} setSkills={setSkills} postData={postData} setPostData={setPostData} />

                {/* submit */}
                <input type="submit" onClick={() => { setPostData({ ...postData, skills: skills }) }} />
            </form>
        </div>
    )
}

export default CreatorForm

import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import Basics from './creatorForms/Basics'
import Education from './creatorForms/Education'
import Skills from './creatorForms/Skills'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../../api/index'
import { useAuth } from '../../../context/AuthContext'
import { initialState } from './variables'
import  useStyles  from './creatorForms/styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import WorkExperience from './creatorForms/WorkExperience'

const CreatorForm = ({ currentId, setCurrentId }) => {

    const { currentUser } = useAuth()
    const [postData, setPostData] = useState(initialState(currentUser))
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const [skills, setSkills] = useState([])
    const dispatch = useDispatch()
    const classes = useStyles()

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
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                {/* photo */}
                <div className={classes.fileInput}>
                    <h1>Upload your photo:</h1>
                    <h1><FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} /></h1>
                </div>
                {/* basics info */}
                <Basics postData={postData} setPostData={setPostData} />

                {/* education */}
                <Education postData={postData} setPostData={setPostData} />

                {/* experience */}
                <WorkExperience postData={postData} setPostData={setPostData}/>

                {/* skills */}
                <Skills skills={skills} setSkills={setSkills} postData={postData} setPostData={setPostData} />

                {/* submit */}
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth onClick={() => { setPostData({ ...postData, skills: skills }) }}>Submit</Button>
            </form>
        </Paper>
    )
}

export default CreatorForm

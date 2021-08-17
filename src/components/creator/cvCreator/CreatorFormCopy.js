import React, { useState, useEffect } from 'react'
import Basics from './creatorForms/Basics'
import Education from './creatorForms/Education'
import Skills from './creatorForms/Skills'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../../api/index'
import { useAuth } from '../../../context/AuthContext'
import { initialState } from './variables'
import useStyles from './styles'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import WorkExperience from './creatorForms/WorkExperience'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Test from '../../../test'

const CreatorForm = ({ currentId, setCurrentId, postData, setPostData }) => {

    const { currentUser } = useAuth()
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
        // // <Paper className={classes.paper}>
        // //     <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        //         {/* photo
        //         <div className={classes.fileInput}>
        //             <h1>Upload your photo:</h1>
        //             <h1><FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, file: base64 })} /></h1>
        //         </div> */}
        <Router>
            <Paper className={classes.paper}>
                <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Switch>
                        <Route
                            path='/cvcreator/test'
                            component={()=>Test} />
                        <Route
                            path='/cvcreator/basics'
                            component={() => {
                                <Basics postData={postData} setPostData={setPostData} />
                            }} />
                        <Route
                            path='/education'
                            component={() => { <Education postData={postData} setPostData={setPostData} /> }} />
                        <Route
                            path='/workexperience'
                            component={() => { <WorkExperience postData={postData} setPostData={setPostData} /> }} />
                        <Route
                            path='/skills'
                            component={() => { <Skills skills={skills} setSkills={setSkills} postData={postData} setPostData={setPostData} /> }} />
                        <Route
                            path='/end'
                            component={() => { <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth onClick={() => { setPostData({ ...postData, skills: skills }) }}>Submit</Button> }} />
                    </Switch>
                </form>
            </Paper>
        </Router>

                // <Basics postData={postData} setPostData={setPostData} />
                // <Education postData={postData} setPostData={setPostData} />
                // <WorkExperience postData={postData} setPostData={setPostData} />
                // <Skills skills={skills} setSkills={setSkills} postData={postData} setPostData={setPostData} />
                // <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth onClick={() => { setPostData({ ...postData, skills: skills }) }}>Submit</Button> */}
        // </form>
        // </Paper>
    )
}

export default CreatorForm

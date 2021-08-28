import React, { useState, useEffect } from 'react'
import Basics from './creatorForms/Basics'
import Education from './creatorForms/Education'
import Skills from './creatorForms/Skills'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../../api/index'
import { useAuth } from '../../../context/AuthContext'
import { initialState } from './variables'
import useStyles from './styles'
import { Button, Paper } from '@material-ui/core';
import WorkExperience from './creatorForms/WorkExperience'
import { Switch, Route } from 'react-router-dom'
import Languages from './creatorForms/Languages'
import Courses from './creatorForms/Courses'
import Hobby from './creatorForms/Hobby'
import Links from './creatorForms/Links'
import Consents from './creatorForms/Consents'

const CreatorForm = ({ currentId, setCurrentId, postData, setPostData }) => {

    const { currentUser } = useAuth()
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)
    const [skills, setSkills] = useState([])
    const [education, setEducation] = useState([])
    const [work, setWork] = useState([])
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        if (post) {
            setPostData(post)
            setSkills(post.skills)
            setEducation(post.education)
            setWork(post.work)
        }
    }, [post, setPostData])

    const handleSubmit = (e) => {
        e.preventDefault()
        setPostData({ ...postData, skills: skills, education: education, work: work })
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        setPostData(initialState(currentUser))
        setSkills([])
        setEducation([])
        setWork([])
        setCurrentId(null)
    }

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Switch>
                    <Route exact path='/cvcreator/basics' >
                        <Basics postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/edu' >
                        <Education education={education} setEducation={setEducation} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/work' >
                        <WorkExperience work={work} setWork={setWork} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/skills' >
                        <Skills skills={skills} setSkills={setSkills} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/languages' >
                        <Languages postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/courses' >
                        <Courses postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/hobby' >
                        <Hobby postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/links' >
                        <Links postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/consent' >
                        <Consents postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/end' >
                        <h2>Click the button to save your CV</h2>
                        <Button
                        className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth
                        onClick={() => { setPostData({ ...postData, skills: skills, education: education, work: work }) }}>
                            Submit
                        </Button>
                    </Route>
                </Switch>
            </form>
        </Paper>
    )
}

export default CreatorForm

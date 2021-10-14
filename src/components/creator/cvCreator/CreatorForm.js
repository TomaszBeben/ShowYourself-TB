import React, { useEffect } from 'react'

import Basics from './creatorForms/Basics'
import Consents from './creatorForms/Consents'
import Courses from './creatorForms/Courses'
import Education from './creatorForms/Education'
import Hobby from './creatorForms/Hobby'
import Languages from './creatorForms/Languages'
import Links from './creatorForms/Links'
import Skills from './creatorForms/Skills'
import WorkExperience from './creatorForms/WorkExperience'

import { Button, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { createPost, updatePost } from '../../../api/index'
import { useAuth } from '../../../context/AuthContext'
import { initialState } from './variables'

import creatorFormStyles from './styles/creatorFormStyles'
import Description from './creatorForms/Description'

const CreatorForm = ({ currentId, setCurrentId, postData, setPostData }) => {
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

    const {
        skills, setSkills,
        education, setEducation,
        work, setWork,
        languages, setLanguages,
        courses, setCourses,
        hobbys, setHobbys,
        links, setLinks,
        consent, setConsent,
        description, setDescription,
        currentUser,
        } = useAuth()

    const dispatch = useDispatch()
    const classes = creatorFormStyles()

    useEffect(() => {
        if (post) {
            setPostData(post)
            setSkills(post.skills)
            setEducation(post.education)
            setWork(post.work)
            setLanguages(post.languages)
            setCourses(post.courses)
            setHobbys(post.hobbys)
            setLinks(post.links)
        }
    }, [post, setPostData, setCourses, setEducation, setHobbys, setLanguages, setLinks, setSkills, setWork])

    const handleSubmit = (e) => {
        e.preventDefault()
        setPostData({
            ...postData,
            currentUser: currentUser,
            skills: skills,
            education: education,
            work: work,
            languages: languages,
            courses: courses,
            hobbys: hobbys,
            links: links,
        })
        if (currentId) {
            dispatch(updatePost(currentId, postData))
        } else {
            dispatch(createPost(postData))
        }
        // setPostData(initialState(currentUser))
        // setCourses([])
        // setEducation([])
        // setHobbys([])
        // setLanguages([])
        // setLinks([])
        // setSkills([])
        // setWork([])
        // setCurrentId(null)
    }

    const newCv = () =>{ 
        setPostData(initialState(currentUser))
        setCourses([])
        setEducation([])
        setHobbys([])
        setLanguages([])
        setLinks([])
        setSkills([])
        setWork([])
        setCurrentId(null)
    }

    return (
        <Paper className={ classes.paper }>
            <form
            onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}>
                <Switch>
                    <Route path='/cvcreator/basics' >
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
                        <Languages languages={languages} setLanguages={setLanguages} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/courses' >
                        <Courses courses={courses} setCourses={setCourses} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/hobby' >
                        <Hobby hobbys={hobbys} setHobbys={setHobbys} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/links' >
                        <Links links={links} setLinks={setLinks} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/consent' >
                        <Consents consent={consent} setConsent={setConsent} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/description' >
                        <Description description={description} setConsent={setDescription} postData={postData} setPostData={setPostData} />
                    </Route>
                    <Route path='/cvcreator/end' >
                        <h2>Click the button to save your CV</h2>
                        <Button
                            className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth
                            onClick={() => {
                                setPostData({
                                    ...postData,
                                    skills: skills,
                                    education: education,
                                    work: work,
                                    languages: languages,
                                    courses: courses,
                                    hobbys: hobbys,
                                    links: links,
                                })
                            }}>
                            Submit
                        </Button>
                        <Button
                            className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth
                            onClick={() => {newCv()}}>
                            NEW CV
                        </Button>
                    </Route>
                </Switch>
            </form>
        </Paper>
    )
}

export default CreatorForm

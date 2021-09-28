import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import useStyles from '../styles'
import Buttons from './Buttons'
import { deleteElement, editElement, moveElement } from './functions'

const Courses = ({ courses, setCourses, postData, setPostData }) => {
    const [singleCourse, setSingleCourse] = useState({})
    const classes = useStyles()

    const addSkill = () => {
        setCourses(courses => [...courses, singleCourse])
        setPostData({ ...postData, courses: courses })
        setSingleCourse({ ...singleCourse, organizer: '', name: '', city: '', start: '', end: '', description: '' })
    }

    return (
        <>
            <Typography>courses</Typography>
            <TextField fullWidth type="text" label='organizer'
                value={singleCourse.organizer || ''}
                onChange={(e) => setSingleCourse({ ...singleCourse, organizer: e.target.value })} />
            <TextField fullWidth type="text" label='name'
                value={singleCourse.name || ''}
                onChange={(e) => setSingleCourse({ ...singleCourse, name: e.target.value })} />
            <TextField fullWidth type="date" label='start' InputLabelProps={{ shrink: true }}
                value={singleCourse.start || ''}
                onChange={(e) => setSingleCourse({ ...singleCourse, start: e.target.value })} />
            <TextField fullWidth type="date" label='end' InputLabelProps={{ shrink: true }}
                value={singleCourse.end || ''}
                onChange={(e) => setSingleCourse({ ...singleCourse, end: e.target.value })} />
            <TextField fullWidth type="text" label='description'
                value={singleCourse.description || ''}
                onChange={(e) => setSingleCourse({ ...singleCourse, description: e.target.value })} />
            <div>
                <Button
                    className={`buttonAccept ${classes.buttonSubmit}`}
                    variant="contained" size="large" type='button'
                    onClick={addSkill}>
                    Add
                </Button>
                <div>
                    {courses.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.organizer}</h1>
                            <h1>{elem.name}</h1>
                            <h1>{elem.start}</h1>
                            <h1>{elem.end}</h1>
                            <h1>{elem.description}</h1>
                            <Buttons
                                deleteElement={() => { deleteElement(courses, setCourses, index) }}
                                editElement={() => { editElement(courses, setSingleCourse, index); deleteElement(courses, setCourses, index) }}
                                moveUp={() => { moveElement(courses, setCourses, index, index - 1) }}
                                moveDown={() => { moveElement(courses, setCourses, index, index + 1) }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Courses

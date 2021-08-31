import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import useStyles from '../styles'
import Buttons from './Buttons'
import { deleteElement, editElement, moveElement } from './functions'

const Education = ({ education, setEducation, postData, setPostData }) => {
    const [singleEducation, setSingleEducation] = useState({})
    const classes = useStyles()

    const addSkill = () => {
        setEducation(education => [...education, singleEducation])
        setPostData({ ...postData, education: education })
        setSingleEducation({ ...singleEducation, degree: '', school: '', city: '', start: '', end: '', description: '' })
    }

    return (
        <>
            <Typography>Education</Typography>
            <TextField fullWidth type="text" label='degree'
                value={singleEducation.degree || ''}
                onChange={(e) => setSingleEducation({ ...singleEducation, degree: e.target.value })} />
            <TextField fullWidth type="text" label='school'
                value={singleEducation.school || ''}
                onChange={(e) => setSingleEducation({ ...singleEducation, school: e.target.value })} />
            <TextField fullWidth type="text" label='city'
                value={singleEducation.city || ''}
                onChange={(e) => setSingleEducation({ ...singleEducation, city: e.target.value })} />
            <TextField fullWidth type="date" label='start' InputLabelProps={{ shrink: true }}
                value={singleEducation.start || ''}
                onChange={(e) => setSingleEducation({ ...singleEducation, start: e.target.value })} />
            <TextField fullWidth type="date" label='end' InputLabelProps={{ shrink: true }}
                value={singleEducation.end || ''}
                onChange={(e) => setSingleEducation({ ...singleEducation, end: e.target.value })} />
            <TextField fullWidth type="text" label='description'
                value={singleEducation.description || ''}
                onChange={(e) => setSingleEducation({ ...singleEducation, description: e.target.value })} />
            <div>
                <Button
                    className={`buttonAccept ${classes.buttonSubmit}`}
                    variant="contained" size="large" type='button'
                    onClick={addSkill}>
                    dodaj
                </Button>
                <div>
                    {education.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.degree}</h1>
                            <h1>{elem.school}</h1>
                            <h1>{elem.city}</h1>
                            <h1>{elem.start}</h1>
                            <h1>{elem.end}</h1>
                            <h1>{elem.description}</h1>
                            <Buttons
                                deleteElement={() => { deleteElement(education, setEducation, index) }}
                                editElement={() => { editElement(education, setSingleEducation, index); deleteElement(education, setEducation, index) }}
                                moveUp={() => { moveElement(education, setEducation, index, index - 1) }}
                                moveDown={() => { moveElement(education, setEducation, index, index + 1) }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Education

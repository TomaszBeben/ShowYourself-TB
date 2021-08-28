import React, { useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import useStyles from '../styles'

const Education = ({ education, setEducation, postData, setPostData }) => {
    const [singleEducation, setSingleEducation] = useState({})
    const classes = useStyles()

    const deleteElement = (index) => {
        const copy = [...education]
        copy.splice(index, 1)
        setEducation(copy)
    }

    const addSkill = () => {
        setEducation(education => [...education, singleEducation])
        setPostData({ ...postData, education: education })
        setSingleEducation({ ...singleEducation, degree: '', school: '', city: '', start: '', end: '', description: '' })
    }

    const render = education.map((elem, index) => (
        <div key={index} >
            <h1>{elem.degree}</h1>
            <h1>{elem.school}</h1>
            <h1>{elem.city}</h1>
            <h1>{elem.start}</h1>
            <h1>{elem.end}</h1>
            <h1>{elem.description}</h1>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={() => { deleteElement(index) }}>
                X
            </Button>
        </div>
    ))

    // console.log(`singeEdu: ${singleEducation}`)
    // console.log(`edu: ${education}`)

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
                    {render}
                </div>
            </div>
        </>
    )
}

export default Education

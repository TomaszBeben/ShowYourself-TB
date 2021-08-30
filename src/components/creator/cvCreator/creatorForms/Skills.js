import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { deleteElement, editElement, moveElement } from './functions'
import useStyles from '../styles'

const Skills = ({ skills, setSkills, postData, setPostData }) => {
    const [singleSkill, setSingleSkill] = useState({})
    const classes = useStyles()

    const addSkill = () => {
        setSkills(skills => [...skills, singleSkill])
        setPostData({ ...postData, skills: skills })
        setSingleSkill({ ...singleSkill, skill: '' })
    }

    return (
        <>
            <div className='skills'>
                <TextField type="text" label='skill'
                    value={singleSkill.skill || ''}
                    onChange={(e) => setSingleSkill({ ...singleSkill, skill: e.target.value })} />
                <Button
                    className={`buttonAccept ${classes.buttonSubmit}`}
                    variant="contained" size="large" type='button'
                    onClick={addSkill}>
                    dodaj
                </Button>
                <div>
                    {skills.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.skill}</h1>
                            <Button
                                className={`.buttonDenied ${classes.buttonSubmit}`}
                                variant="contained" size="large" type='button'
                                onClick={() => { deleteElement(skills, setSkills, index) }}>
                                X
                            </Button>
                            <Button
                                className={`.buttonDenied ${classes.buttonSubmit}`}
                                variant="contained" size="large" type='button'
                                onClick={() => { editElement(skills, setSingleSkill , index) }}>
                                Edit
                            </Button>
                            <Button
                                className={`.buttonDenied ${classes.buttonSubmit}`}
                                variant="contained" size="large" type='button'
                                onClick={() => { moveElement(skills, setSkills, index, index - 1) }}>
                                up
                            </Button>
                            <Button
                                className={`.buttonDenied ${classes.buttonSubmit}`}
                                variant="contained" size="large" type='button'
                                onClick={() => { moveElement(skills, setSkills, index, index + 1) }}>
                                down
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills

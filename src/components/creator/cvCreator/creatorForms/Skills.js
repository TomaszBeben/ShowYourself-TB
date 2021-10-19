import React, { useState } from 'react'
import Buttons from './Buttons'
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
        <div>
            <div className='skills'>
                <TextField type="text" label='skill'
                    value={singleSkill.skill || ''}
                    onChange={(e) => setSingleSkill({ ...singleSkill, skill: e.target.value })} />
                <Button
                    className={`buttonAccept ${classes.buttonSubmit}`}
                    variant="contained" size="large" type='button'
                    onClick={addSkill}>
                    Add
                </Button>
                <div className='creatorView--spaceDiv'></div>
                <div>
                    {skills.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.skill}</h1>
                            <Buttons
                                deleteElement={() => { deleteElement(skills, setSkills, index) }}
                                editElement={() => { editElement(skills, setSingleSkill, index); deleteElement(skills, setSkills, index) }}
                                moveUp={() => { moveElement(skills, setSkills, index, index - 1) }}
                                moveDown={() => { moveElement(skills, setSkills, index, index + 1) }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills

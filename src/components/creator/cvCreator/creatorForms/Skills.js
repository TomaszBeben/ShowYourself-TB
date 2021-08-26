import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import useStyles from '../styles'

const Skills = ({ skills, setSkills, postData, setPostData }) => {
    const [singleSkill, setSingleSkill] = useState({})
    const classes = useStyles()

    const delElem = (index) => {
        const copy = [...skills]
        copy.splice(index, 1)
        setSkills(copy)
    }
    const editElem = (index) => {
        const copy = [...skills]
        setSingleSkill(copy[index])
    }





    const addSkill = () => {
        setSkills(skills => [...skills, singleSkill])
        setPostData({ ...postData, skills: skills })
        setSingleSkill({ ...singleSkill, skill: '' })
    }
    const render = skills.map((elem, index) => (
        <div key={index} >
            <h1>{elem.skill}</h1>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={() => { delElem(index) }}>
                X
            </Button>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={() => {editElem(index)}}>
                Edit
            </Button>
        </div>
    ))

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
                    {render}
                </div>
            </div>
        </>
    )
}

export default Skills

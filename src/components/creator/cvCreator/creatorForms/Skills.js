/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import useStyles from '../styles'

const Skills = ({ skills, setSkills, postData, setPostData }) => {
    const [singleSkill, setSingleSkill] = useState('')
    const classes = useStyles()

    const delSkill = (skill, index) =>{
        skill.splice(index, 1);
        setSkills(skills => [...skills, singleSkill])
    } // to check!!!!!!!!!!!!
    const render = skills.map((element, index) => (
        <div key={index}>
            <li style={{ textDecoration: 'none' }}>{element}</li>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={() => { delSkill(skills, index) }}>x</Button>
        </div>
    ))

    const addSkill = () => {
        setSkills(skills => [...skills, singleSkill])
        setPostData({ ...postData, skills: skills })
        setSingleSkill('')
    }

    return (
        <div className='skills'>
            <TextField type="text" label='skill' value={singleSkill} onChange={(e) => setSingleSkill(e.target.value)} />
            <Button
                className={`buttonAccept ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={addSkill}>dodaj</Button>
            <div>
                {render}
            </div>
        </div>
    )
}

export default Skills

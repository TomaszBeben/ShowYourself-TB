import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import useStyles from '../styles'

const Skills = ({ skills, setSkills, postData, setPostData }) => {
    const [singleSkill, setSingleSkill] = useState('')
    const classes = useStyles()

    const delSkill = (skill, index) => {
        skill.splice(index, 1)
        ////render component
    }

    const addSkill = () => {
        setSkills(skills => [...skills, singleSkill])
        setPostData({ ...postData, skills: skills })
        setSingleSkill('')
    }
    const render = skills.map((element, index) =>
        <div>
            <li style={{ textDecoration: 'none' }}>{element}</li>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={() => { delSkill(skills, index) }}>
                X
            </Button>
        </div>
    )

    return (
        <>
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
        </>
    )
}

export default Skills

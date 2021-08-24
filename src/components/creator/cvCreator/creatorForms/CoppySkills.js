import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import useStyles from '../styles'

const Skills = ({ skills, setSkills, postData, setPostData }) => {
    const [singleSkill, setSingleSkill] = useState({})
    const classes = useStyles()

    const delSkill = (index) => {
        const copy = [...skills]
        copy.splice(index, 1)
        setSkills(copy)
    }

    const addSkill = () => {
        setSkills(skills => [...skills, singleSkill])
        setPostData({ ...postData, skills: skills })
        setSingleSkill({...singleSkill, skill:''})
    }
    const render = skills.map((elem, index) =>
        <div >
            <p key={index} style={{ textDecoration: 'none' }}>{elem.skill}</p>
            <Button
                className={`.buttonDenied ${classes.buttonSubmit}`}
                variant="contained" size="large" type='button'
                onClick={() => { delSkill(skills, index) }}>
                X
            </Button>
        </div>
    )
    console.log(skills);

    return (
        <>
            <div className='skills'>
                <TextField type="text" label='skill' value={singleSkill.skill} onChange={(e) => setSingleSkill({...singleSkill, skill:e.target.value })} />
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

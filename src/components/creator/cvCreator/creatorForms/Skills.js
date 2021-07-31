import React, { useState, useEffect } from 'react'

const button = {
    height: '25px',
    width: '25px',
    border: '1px solid black',
    fontSize: '1rem',
    cursor: 'pointer'
}

const Skills = ({ skills, setSkills, postData, setPostData }) => {
    const [singleSkill, setSingleSkill] = useState('')

    const render = skills.map((element, index) => (
        <div key={index}>
            <li>{element}</li>
            <button type='button' style={button} onClick={() => { skills.splice(index, 1) }}>x</button>
        </div>
    ))

    const addSkill = () => {
        setSkills(skills => [...skills, singleSkill])
        setPostData({ ...postData, skills: skills })
        setSingleSkill('')
    }

    return (
        <>
            <input type="text" placeholder='skill' value={singleSkill} onChange={(e) => setSingleSkill(e.target.value)} />
            <input type="button" value='dodaj' onClick={addSkill} />
            {render}
        </>
    )
}

export default Skills

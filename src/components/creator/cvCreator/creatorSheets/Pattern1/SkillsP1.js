import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Skills = () => {
    const { skills, color } = useAuth()

    return (
        <>
            <div style={{ backgroundColor: `${color}` }} className='pattern1--leftSide_darker--container'>
                {skills.length !== 0 ? <p className='pattern1--leftSide_text--header'>Skills: </p> : null}
                {skills.map((elem, index) => (
                    <div key={index}>
                        <p className='pattern1--leftSide_text'>{elem.skill}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
///
export default Skills

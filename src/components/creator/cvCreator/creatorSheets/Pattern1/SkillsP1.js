import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Skills = () => {
    const { skills, color } = useAuth()

    console.log(skills);

    return (
        <>
        {/* {skills === [] ? null : <p className='pattern1--leftSide_text--header'>Skills: </p>} */}
         {skills.map((elem, index) => (
                        <div key={index} style={{ backgroundColor: `${color}` }} className='pattern1--leftSide_darker--container'>
                            <p className='pattern1--leftSide_text--header'>{elem.skill}</p>
                        </div>
                    ))}
        </>
    )
}

export default Skills

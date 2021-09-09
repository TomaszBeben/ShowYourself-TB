import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Skills = () => {
    const { skills } = useAuth()

    return (
        <>
         {skills.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.skill}</h1>
                        </div>
                    ))}
        </>
    )
}

export default Skills

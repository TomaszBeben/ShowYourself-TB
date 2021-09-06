import React from 'react'
import { useAuth } from '../../../../context/AuthContext'
//Creator View Folder

const WorkExperience = () => {
    const { work } = useAuth()

    return (
        <>
            {work.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.position}</h1>
                            <h1>{elem.company}</h1>
                            <h1>{elem.location}</h1>
                            <h1>{elem.start}</h1>
                            <h1>{elem.end}</h1>
                            <h1>{elem.description}</h1>
                        </div>
                    ))}
        </>
    )
}

export default WorkExperience

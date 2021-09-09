import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Education = () => {
    const { education } = useAuth()

    return (
        <>
        {education.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.degree}</h1>
                            <h1>{elem.school}</h1>
                            <h1>{elem.city}</h1>
                            <h1>{elem.start}</h1>
                            <h1>{elem.end}</h1>
                            <h1>{elem.description}</h1>
                        </div>
                    ))}
        </>
    )
}

export default Education

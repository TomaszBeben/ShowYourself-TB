//Creator View Folder
import React from 'react'
import { useAuth } from '../../../../context/AuthContext'

const Courses = () => {
    const { courses } = useAuth()

    return (
        <>
            {courses.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.organizer}</h1>
                            <h1>{elem.name}</h1>
                            <h1>{elem.start}</h1>
                            <h1>{elem.end}</h1>
                            <h1>{elem.description}</h1>
                        </div>
                    ))}
        </>
    )
}

export default Courses

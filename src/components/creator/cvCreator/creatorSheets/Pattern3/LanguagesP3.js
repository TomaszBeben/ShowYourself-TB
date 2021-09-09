import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Languages = () => {
    const { languages } = useAuth()

    return (
        <>
            {languages.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.language}</h1>
                            <h1>{elem.degree}</h1>
                        </div>
                    ))}
        </>
    )
}

export default Languages

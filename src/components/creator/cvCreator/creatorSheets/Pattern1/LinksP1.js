import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Links = () => {
    const { links } = useAuth()

    return (
        <>
            {links.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.link}</h1>
                            <h1>{elem.degree}</h1>
                        </div>
                    ))}
        </>
    )
}

export default Links

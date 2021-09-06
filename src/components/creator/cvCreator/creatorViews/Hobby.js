import React from 'react'
import { useAuth } from '../../../../context/AuthContext'
//Creator View Folder

const Hobby = () => {
    const { hobbys } = useAuth()

    return (
        <>
            {hobbys.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.hobby}</h1>
                        </div>
                    ))}
        </>
    )
}

export default Hobby
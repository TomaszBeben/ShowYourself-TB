import React from 'react'
import { useAuth } from '../../../../context/AuthContext'
//Creator View Folder



//////////// DB has to be changed hobby => hobbys 
////////////   to do tommorow :)




const Hobby = () => {
    const { hobbys } = useAuth()

    return (
        <>
        {/* hobbys dont work, need fix */}
            {hobbys.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.hobby}</h1>
                        </div>
                    ))}
        </>
    )
}

export default Hobby
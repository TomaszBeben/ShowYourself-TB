import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Links = () => {
    const { links, color } = useAuth()

    return (
        <>
        <div style={{ backgroundColor: `${color}` }} className='pattern1--leftSide_darker--container'>
            {links.length !== 0 ? <p className='pattern1--leftSide_text--header'>Links: </p> : null}
                {links.map((elem, index) => (
                    <div key={index} className='pattern1--leftSide_text--group' >
                        <p className='pattern1--leftSide_text'>{elem.link}</p>
                        <p className='pattern1--leftSide_text-margined'>{elem.description}</p>
                    </div>
                ))}
            </div>
            {/* {links.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.link}</h1>
                            <h1>{elem.degree}</h1>
                        </div>
                    ))} */}
        </>
    )
}

export default Links

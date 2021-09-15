import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Languages = () => {
    const { languages, color } = useAuth()

    return (
        <>
            <div style={{ backgroundColor: `${color}` }} className='pattern1--leftSide_darker--container'>
            {languages.length !== 0 ? <p className='pattern1--leftSide_text--header'>Languages: </p> : null}
                {languages.map((elem, index) => (
                    <div key={index} className='pattern1--leftSide_text--group' >
                        <p className='pattern1--leftSide_text'>{elem.language}</p>
                        <p className='pattern1--leftSide_text-margined'>{elem.degree}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Languages

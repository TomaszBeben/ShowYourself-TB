import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Education = () => {
    const { education, color } = useAuth()

    return (
        <>
            {education.length !== 0 ?
                <div>
                    <div className='pattern1--rightSide_text--header_upscore'></div>
                    <p style={{color: color}} className='pattern1--rightSide_text--header'>Education: </p>
                </div>
                : null}
            {education.map((elem, index) => (
                <div key={index} className='pattern1--rightSide--container'>
                    <div className='pattern1--rightSide_date'>
                        <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>{elem.start}</p>
                        {elem.end === undefined
                            ? <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>-Present</p>
                            : null
                        }
                        <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>
                            {elem.end === undefined || '' ? null : `-${elem.end}`}
                        </p>
                    </div>
                    <div className='pattern1--rightSide_content'>
                        <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>{elem.degree}</p>
                        <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>{elem.school}</p>
                        <p className='pattern1--rightSide_text'>{elem.description}</p>
                    </div>
                    {/* <p>{elem.degree}</p>
                    <p>{elem.school}</p>
                    <p>{elem.city}</p>
                    <p>{elem.description}</p> */}
                </div>
            ))}
        </>
    )
}

export default Education

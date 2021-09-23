//Creator View Folder
import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'

const Courses = () => {
    const { courses, color } = useAuth()

    return (
        <>
            {courses.length !== 0 ?
                <div>
                    <div className='pattern1--rightSide_text--header_upscore'></div>
                    <p style={{ color: color }} className='pattern1--rightSide_text--header'>Courses: </p>
                </div>
                : null}
            {courses.map((elem, index) => (
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
                        <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>{elem.organizer}</p>
                        <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>{elem.name}</p>
                        <p className='pattern1--rightSide_text'>{elem.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Courses

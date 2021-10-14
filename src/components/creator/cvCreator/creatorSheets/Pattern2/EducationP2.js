import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Education = () => {
    const { education } = useAuth()

    return (
        <>
        <div className='pattern2--rightSide_section--container'>
            {education.length !== 0 ?
                    <div className='pattern2--leftSide_elem--header_container'>
                        <span className='pattern2--rightSide_elem--header'>
                            <span>Experience</span>
                        </span>
                        <div
                            className='pattern2--rightSide_elem--header_square'></div>
                    </div>
                    : null}
            {education.map((elem, index) => (
                <div key={index} className='pattern2--rightSide--container' >
                    <div className='pattern2--rightSide_date'>
                        <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>{elem.start}</p>
                        {elem.end === undefined
                            ? <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>-Present</p>
                            : null
                        }
                        <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>
                            {elem.end === undefined || '' ? null : `-${elem.end}`}
                        </p>
                    </div>
                    <div className='pattern2--rightSide_content'>
                        <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>{elem.position}</p>
                        <p className='pattern2--rightSide_text'>{elem.degree}</p>
                        <p className='pattern2--rightSide_text'>{elem.school}</p>
                        <p className='pattern2--rightSide_text'>{elem.location}</p>
                        <p className='pattern2--rightSide_text'>{elem.description}</p>
                    </div>

                </div>
            ))}
        </div>
        {/* {education.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.degree}</h1>
                            <h1>{elem.school}</h1>
                            <h1>{elem.city}</h1>
                            <h1>{elem.start}</h1>
                            <h1>{elem.end}</h1>
                            <h1>{elem.description}</h1>
                        </div>
                    ))} */}
        </>
    )
}

export default Education

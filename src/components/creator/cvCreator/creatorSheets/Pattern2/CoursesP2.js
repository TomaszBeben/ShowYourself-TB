//Creator View Folder
import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'

const Courses = () => {
    const { courses } = useAuth()

    return (
        <>
            <div className='pattern2--rightSide_section--container'>
                {courses.length !== 0 ?
                    <div className='pattern2--leftSide_elem--header_container'>
                        <span className='pattern2--rightSide_elem--header'>
                            <span>Courses</span>
                        </span>
                        <div
                            className='pattern2--rightSide_elem--header_square'></div>
                    </div>
                    : null}
                {courses.map((elem, index) => (
                    <div key={index} className='pattern2--rightSide--container' >
                        <div className='pattern2--rightSide_date'>
                        <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>{elem.start}</p>
                        {elem.end === ''
                            ? <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'></p>
                            : <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>
                                {elem.end === undefined || '' ? null : `-${elem.end}`}
                            </p>
                        }
                    </div>
                        <div className='pattern2--rightSide_content'>
                            <p className='pattern2--rightSide_text'>{elem.organizer}</p>
                            <p className='pattern2--rightSide_text'>{elem.name}</p>
                            <p className='pattern2--rightSide_text'>{elem.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Courses

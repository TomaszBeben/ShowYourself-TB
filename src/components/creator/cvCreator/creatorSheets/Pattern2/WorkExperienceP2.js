import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const WorkExperience = () => {
    const { work } = useAuth()

    return (
        <div className='pattern2--rightSide_section--container'>
            {work.length !== 0 ?
                <div className='pattern2--leftSide_elem--header_container'>
                    <span className='pattern2--rightSide_elem--header'>
                        <span>Experience</span>
                    </span>
                    <div
                        className='pattern2--rightSide_elem--header_square'></div>
                </div>
                : null}
            {work.map((elem, index) => (
                <div key={index} className='pattern2--rightSide--container' >
                    <div className='pattern2--rightSide_date'>
                        <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>{elem.start}</p>
                        {elem.end === ''
                            ? <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>-Present</p>
                            : <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>
                                {elem.end === undefined || '' ? null : `-${elem.end}`}
                            </p>
                        }
                    </div>
                    <div className='pattern2--rightSide_content'>
                        <p className='pattern2--rightSide_text'>{elem.position}</p>
                        <p className='pattern2--rightSide_text'>{`${elem.company}, ${elem.location}`}</p>
                        {elem.description.map((elem, i) => (
                            <p key={i} className='pattern2--rightSide_text pattern2--rightSide_text-descryption'>{` \u2022 ${elem}`}</p>
                        ))}
                        {/* <p className='pattern2--rightSide_text'>{elem.location}</p> */}
                    </div>

                </div>
            ))}
        </div>
    )
}

export default WorkExperience

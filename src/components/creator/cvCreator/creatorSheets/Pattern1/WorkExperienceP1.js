import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const WorkExperience = () => {
    const { work } = useAuth()
    return (
        <>
            {work.length !== 0 ?
                <div>
                    <div className='pattern1--rightSide_text--header_upscore'></div>
                    <p className='pattern1--rightSide_text--header'>Experience: </p>
                </div>
                : null}
            {work.map((elem, index) => (
                <div key={index} className='pattern1--rightSide--container' >
                    <div className='pattern1--rightSide_date'>
                        {/* {elem.start !== undefined ? <p className='pattern1--rightSide_text'>from:</p> : null} */}
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
                        <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>{elem.position}</p>
                        <p className='pattern1--rightSide_text'>{elem.company}</p>
                        {/* <p className='pattern1--rightSide_text'>{elem.location}</p> */}
                        <p className='pattern1--rightSide_text'>{elem.description}</p>
                    </div>

                </div>
            ))}
        </>
    )
}

export default WorkExperience

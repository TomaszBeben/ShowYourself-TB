import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Skills = () => {
    const { skills, color } = useAuth()

    return (
        <>
            <div className='pattern2--leftSide_section--container'>
                {skills.length !== 0 ?
                    <div className='pattern2--leftSide_elem--header_container'>
                        <span style={{ backgroundColor: `${color}` }} className='pattern2--leftSide_elem--header'>
                            <span>Skills</span>
                        </span>
                        <div
                            style={{ backgroundColor: `${color}` }}
                            className='pattern2--leftSide_elem--header_square'></div>
                    </div>
                    : null}
                {skills.map((elem, index) => (
                    <div key={index} className='pattern2--leftSide_text--main' >
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <div style={{width:'2mm', height: '2mm', background: color, marginRight: '1mm' }}></div>
                            <h1>{elem.skill}</h1>
                        </div>
                    </div>
                ))}
            </div>
            {/* {skills.map((elem, index) => (
                        <div key={index} >
                            <h1>{elem.skill}</h1>
                        </div>
                    ))} */}
        </>
    )
}

export default Skills

import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Languages = () => {
    const { languages, color } = useAuth()

    return (
        <>
            <div className='pattern2--leftSide_section--container'>
                {languages.length !== 0 ?
                    <div className='pattern2--leftSide_elem--header_container'>
                        <span style={{ backgroundColor: `${color}` }} className='pattern2--leftSide_elem--header'>
                            <span>Languages</span>
                        </span>
                        <div
                            style={{ backgroundColor: `${color}` }}
                            className='pattern2--leftSide_elem--header_square'></div>
                    </div>
                    : null}
                {languages.map((elem, index) => (
                    <div key={index} className='pattern2--leftSide_links--main' >
                        <span>{elem.language}</span>
                        <span
                            className='pattern2--leftSide_links--link'
                            >{elem.degree}
                        </span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Languages

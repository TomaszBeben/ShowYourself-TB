import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder



//////////// DB has to be changed hobby => hobbys 
////////////   to do tommorow :)




const Hobby = () => {
    const { hobbys } = useAuth()

    return (
        <>
            <div className='pattern2--rightSide_section--container'>
                {hobbys.length !== 0 ?
                    <div className='pattern2--leftSide_elem--header_container'>
                        <span className='pattern2--rightSide_elem--header'>
                            <span>Hobbys</span>
                        </span>
                        <div
                            className='pattern2--rightSide_elem--header_square'></div>
                    </div>
                    : null}
                {hobbys.map((elem, index) => (
                    <div key={index} className='pattern2--rightSide--container' >
                        <div className='pattern2--rightSide_date'>
                            {/* <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'></p>
                            {elem.end === undefined
                                ? <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'></p>
                                : null
                            }
                            <p className='pattern2--rightSide_text pattern2--rightSide_text_bold'>
                                {elem.end === undefined || '' ? null : `-${elem.end}`}
                            </p> */}
                        </div>
                        <div className='pattern2--rightSide_content'>
                            <p className='pattern2--rightSide_text'>{elem.hobby}</p>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default Hobby
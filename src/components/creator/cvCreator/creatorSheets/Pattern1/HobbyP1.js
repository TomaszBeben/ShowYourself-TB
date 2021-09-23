import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
//Creator View Folder

const Hobby = () => {
    const { hobbys, color } = useAuth()

    return (
        <>
            {hobbys.length !== 0 ?
                <div>
                    <div className='pattern1--rightSide_text--header_upscore'></div>
                    <p style={{ color: color }} className='pattern1--rightSide_text--header'>Hobbys: </p>
                </div>
                : null}
            {hobbys.map((elem, index) => (
                <div key={index} className='pattern1--rightSide_hobby--container'>
                    <div className='pattern1--rightSide_date'>
                        <p className='pattern1--rightSide_text'></p>
                    </div>
                    <div className='pattern1--rightSide_content'>
                        <p className='pattern1--rightSide_text pattern1--rightSide_text_bold'>{elem.hobby}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Hobby
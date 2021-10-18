import React from 'react'
import { useAuth } from '../../../../../context/AuthContext'
import { Link } from '@mui/material';
//Creator View Folder

const Links = () => {
    const { links, color } = useAuth()

    return (
        <>
            <div className='pattern2--leftSide_section--container'>
                {links.length !== 0 ?
                    <div className='pattern2--leftSide_elem--header_container'>
                        <span style={{ backgroundColor: `${color}` }} className='pattern2--leftSide_elem--header'>
                            <span>Links</span>
                        </span>
                        <div
                            style={{ backgroundColor: `${color}` }}
                            className='pattern2--leftSide_elem--header_square'></div>
                    </div>
                    : null}
                {links.map((elem, index) => (
                    <div key={index} className='pattern2--leftSide_links--main' >
                        <span>{elem.description}</span>
                        <Link
                            className='pattern2--leftSide_links--link'
                            color={`${color}`}
                            href={`${elem.link}`}
                            underline='none' >
                            {elem.link}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Links
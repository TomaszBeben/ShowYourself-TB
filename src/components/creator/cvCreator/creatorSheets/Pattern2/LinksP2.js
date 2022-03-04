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
                            className='pattern2--leftSide_elem--header_square'>
                        </div>
                    </div>
                    : null}
                {links.map((elem, index) => (
                    <a href={elem.link} key={index} className='pattern2--leftSide_text--main' >
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                            <div style={{ width: '2mm', height: '2mm', background: color, marginRight: '1mm' }}></div>
                            <h1 className='pattern2--leftSide_links--description'>{elem.description}</h1>
                        </div>
                        <Link
                            variant='a'
                            className='pattern2--leftSide_links--link'
                            color={`${color}`}
                            href={`${elem.link}`}
                            underline='none' >
                            {elem.link}
                        </Link>
                    </a>
                ))}
            </div>
        </>
    )
}

export default Links
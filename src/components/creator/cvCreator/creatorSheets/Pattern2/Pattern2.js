import React, { useState, useRef, useEffect } from 'react'
// import PictureP2 from './PictureP2'
// import Basics from './BasicsP2'
// import Description from './DescriptionP2'
// import Education from './EducationP2'
// import WorkExperience from './WorkExperienceP2'
// import Skills from './SkillsP2'
// import Languages from './LanguagesP2'
// import Courses from './CoursesP2'
// import Hobby from './HobbyP2'
// import Links from './LinksP2'
// import Consent from './ConsentsP2'

import { useAuth } from '../../../../../context/AuthContext'

const Pattern2 = () => {
    const { color } = useAuth();
    const [height, setHeight] = useState('297mm')

    const ref = useRef()
    useEffect(() => {
        ref.current.clientHeight >= 1130 ? setHeight('594mm') : setHeight('297mm')
        // console.log(ref.current.clientHeight);
    }, []);
    // thing to thought

    let elem = []
    for (let i = 0; i < 8; i++) {
        elem.push(i)
    }

    return (
        <div ref={ref} style={{ backgroundColor: `white`, minHeight: height }} className='pattern2--container_main'>
            <div className='fractal--top__container'>
                {elem.map((fractal) => (
                    <div
                        style={{
                            top: `calc(-25mm - (68mm * ${fractal}))`,
                            left: `calc(-60mm + (36mm * ${fractal}))`,
                            transform: `rotate(calc(5deg + (2deg * ${fractal})))`,
                            backgroundColor: `${color}`
                        }}
                        key={fractal}
                        className={`fractals`}>
                    </div>
                ))}
            </div>
            <div className='fractal--bottom__container'>
            {elem.map((fractal) => (
                    <div
                        style={{
                            top: `calc(80mm - (68mm * ${fractal}))`,
                            left: `calc(-60mm + (36mm * ${fractal}))`,
                            transform: `rotate(calc(5deg + (2deg * ${fractal})))`,
                            backgroundColor: `${color}`
                        }}
                        key={fractal}
                        className={`fractals`}>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pattern2

/* eslint-disable no-lone-blocks */
{/* <div style={{ backgroundColor: `${color}`, minHeight: height }} className='pattern2--container_left'>
                    <Basics />
                    <Skills />
                    <Languages />
                    <Links />
                </div>
                <div className='pattern2--container_right'>
                    <Description />
                    <WorkExperience />
                    <Education />
                    <Courses />
                    <Hobby />
                    <Consent />
                </div> */}
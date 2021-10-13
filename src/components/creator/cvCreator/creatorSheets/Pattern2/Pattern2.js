import React, { useState, useRef, useEffect } from 'react'
// import PictureP2 from './PictureP2'
import Basics from './BasicsP2'
import Description from './DescriptionP2'
import Education from './EducationP2'
import WorkExperience from './WorkExperienceP2'
import Skills from './SkillsP2'
import Languages from './LanguagesP2'
import Courses from './CoursesP2'
import Hobby from './HobbyP2'
import Links from './LinksP2'
import Consent from './ConsentsP2'

// import { useAuth } from '../../../../../context/AuthContext'
import Fractals from './Fractals';
import PictureP2 from './PictureP2';

const Pattern2 = () => {
    // const { color } = useAuth();
    const [height, setHeight] = useState('297mm')

    const ref = useRef()
    useEffect(() => {
        ref.current.clientHeight >= 1130 ? setHeight('594mm') : setHeight('297mm')
        // console.log(ref.current.clientHeight);
    }, []);
    // thing to thought

    return (
        <div ref={ref} style={{ backgroundColor: `white`, minHeight: height }} className='pattern2--container_main'>
            <Fractals />
            <div className='pattern2--container_cv'>
                <Basics />
                <PictureP2 />
                <div className='pattern2--middleSection_container--main'>
                    <div className='pattern2--middleSection_container--left'>
                        <Description />
                        <Links />
                        <Skills />
                        <Languages />
                    </div>
                    <div className='pattern2--middleSection_container--right'>
                        <WorkExperience />
                        <Education />
                        <Courses />
                        <Hobby />
                        <Consent />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pattern2

/* eslint-disable no-lone-blocks */
{/* <div style={{ backgroundColor: `${color}`, minHeight: height }} className='pattern2--container_left'>
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
import React, { useState, useRef, useEffect } from 'react'
// import PictureP1 from './PictureP1'
import Basics from './BasicsP1'
import Education from './EducationP1'
import WorkExperience from './WorkExperienceP1'
import Skills from './SkillsP1'
import Languages from './LanguagesP1'
import Courses from './CoursesP1'
import Hobby from './HobbyP1'
import Links from './LinksP1'
import Consent from './ConsentsP1'

import { useAuth } from '../../../../../context/AuthContext'

const Pattern1 = () => {
    const {color} = useAuth();
    const[ height, setHeight] = useState('297mm')

    const ref = useRef()
    useEffect(() => {
        ref.current.clientHeight >= 1130 ? setHeight('594mm') : setHeight('297mm')
        // console.log(ref.current.clientHeight);
      }, []);
      // thing to thought

    return (
        <div ref={ref} className='pattern1--container_main'>
            <div style={{backgroundColor: `${color}`, minHeight: height}} className='pattern1--container_left'>
                <Basics/>
                <Skills/>
                <Languages/>
                <Links/>
            </div>
            <div className='pattern1--container_right'>
                <WorkExperience/>
                <Education/>
                <Courses/>
                <Hobby/>
                <Consent/>
            </div>
        </div>
    )
}

export default Pattern1
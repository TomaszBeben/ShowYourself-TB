import React from 'react'
import PictureP1 from './PictureP1'
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

    return (
        <div className='pattern1--container_main'>
            <div style={{backgroundColor: `${color}`}} className='pattern1--container_left'>
                <Basics/>
                <Skills/>
                <Languages/>
            </div>
            <div className='pattern1--container_right'>

            </div>
        </div>
    )
}

export default Pattern1
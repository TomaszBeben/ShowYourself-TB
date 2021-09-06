import React, { forwardRef } from 'react'
import Basics from './creatorViews/Basics';
import Education from './creatorViews/Education';
import WorkExperience from './creatorViews/WorkExperience';
import Skills from './creatorViews/Skills';
import Languages from './creatorViews/Languages';
import Courses from './creatorViews/Courses';
import Hobby from './creatorViews/Hobby';
import Links from './creatorViews/Links';
import Consent from './creatorViews/Consents';

const CurrentCv = forwardRef(({ postData }, ref) => {
    return (
        <div ref={ref}>
            <p>{postData.name}</p>
            <p>{postData.surname}</p>
            <p>{postData.dateOfBirth}</p>
            <p>{postData.country}</p>
            <p>{postData.city}</p>
            <p>{postData.phone}</p>
            <p>{postData.zipCode}</p>
            <p>{postData.consent}</p>
            <Basics/>
            <Education/>
            <WorkExperience/>
            <Skills/>
            <Languages/>
            <Courses/>
            <Hobby/>
            <Links/>
            <Consent/>
        </div>)

});

export default CurrentCv
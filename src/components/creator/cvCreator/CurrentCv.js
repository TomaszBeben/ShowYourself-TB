import React, { forwardRef } from 'react'
import { useAuth } from '../../../context/AuthContext';
// import Basics from './creatorViews/Basics';
// import Education from './creatorViews/Education';
// import WorkExperience from './creatorViews/WorkExperience';
// import Skills from './creatorViews/Skills';
// import Languages from './creatorViews/Languages';
// import Courses from './creatorViews/Courses';
// import Hobby from './creatorViews/Hobby';
// import Links from './creatorViews/Links';
// import Consent from './creatorViews/Consents';

import Pattern1 from './creatorSheets/Pattern1/Pattern1'
import Pattern2 from './creatorSheets/Pattern2/Pattern2'
import Pattern3 from './creatorSheets/Pattern3/Pattern3'

const CurrentCv = forwardRef(({ postData }, ref) => {
    const { sheetStyle } = useAuth()
    const render = (pattern) => {
        switch (pattern) {
            case 'style 1':
                return <Pattern1/>
            case 'style 2':
                return <Pattern2/>
            case 'style 3':
                return <Pattern3/>
            default:
                break;
        }
    }

    return (
        <div ref={ref}>
            {render(sheetStyle)}
        </div>
    )
});

export default CurrentCv
import React from 'react'

import AboutDetails from '../features/about/aboutDetails';
import Skills from '../features/skills/skills.jsx';
import Education from '../features/education/education.jsx';
import Experience from '../features/experience/experience.jsx';

function AboutPage() {
    return (
        <>
            <AboutDetails />
            <Skills />
            <Education />
            <Experience />
        </>
    )
}

export default AboutPage
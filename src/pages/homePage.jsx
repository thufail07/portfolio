import React from 'react'

import Hero from '../features/hero/hero.jsx';
import About from '../features/about/about.jsx';
import Education from '../features/education/education.jsx';
import Linkedin from '../features/linkedin/linkedin.jsx';
import Experience from '../features/experience/experience.jsx';
import Skills from '../features/skills/skills.jsx';
import Projects from '../features/project/project.jsx';
import Certification from '../features/certification/certification.jsx';
import Contact from '../features/contact/contact.jsx';

function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Education />
            <Linkedin />
            <Experience />
            <Skills />
            <Projects />
            <Certification />
            <Contact />
        </>
    )
}

export default HomePage
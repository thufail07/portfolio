import { useEffect } from 'react'
import Layout from './components/layout/layout.jsx'
import Hero from './features/hero/hero.jsx'
import About from './features/about/about.jsx'
import Education from './features/education/education.jsx'
import Linkedin from './features/linkedin/linkedin.jsx'
import Experience from './features/experience/experience.jsx'
import Projects from './features/project/project.jsx'
import Certification from './features/certification/certification.jsx'
import Contact from './features/contact/contact.jsx'


function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progress = document.getElementById('scroll-progress');
      if (progress) progress.style.width = `${scrollPercent}%`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Layout>
      <Hero />
      <About />
      <Education />
      <Linkedin />
      <Experience />
      <Projects />
      <Certification />
      <Contact />
    </Layout>
  )
}

export default App


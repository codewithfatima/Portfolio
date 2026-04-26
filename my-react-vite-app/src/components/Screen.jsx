import React from 'react'
import Home from './Home'
import About from './About'
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Screen = () => {
    return (
        <div>
            <Home />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    )
}

export default Screen
import React from 'react';
import Background3D from '../components/3d/Background3D';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <>
            <Background3D />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;

import React from 'react';
import Background3D from '../components/3d/Background3D';
import About from '../components/sections/About';

const AboutPage = () => {
    return (
        <>
            <Background3D />
            <div style={{ paddingTop: '4rem' }}>
                <About />
            </div>
        </>
    );
};

export default AboutPage;

import React from 'react';
import Background3D from '../components/3d/Background3D';
import Experience from '../components/sections/Experience';

const ExperiencePage = () => {
    return (
        <>
            <Background3D />
            <div style={{ paddingTop: '4rem' }}>
                <Experience />
            </div>
        </>
    );
};

export default ExperiencePage;

import React from 'react';
import Background3D from '../components/3d/Background3D';
import Projects from '../components/sections/Projects';

const ProjectsPage = () => {
    return (
        <>
            <Background3D />
            <div style={{ paddingTop: '4rem' }}>
                <Projects />
            </div>
        </>
    );
};

export default ProjectsPage;

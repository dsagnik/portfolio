import React from 'react';
import Background3D from '../components/3d/Background3D';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
    return (
        <>
            <Background3D />
            <div style={{ paddingTop: '4rem' }}>
                <Contact />
            </div>
        </>
    );
};

export default ContactPage;

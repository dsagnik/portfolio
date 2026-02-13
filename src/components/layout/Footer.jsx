import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import '../../styles/glass.css';

const Footer = () => {
    return (
        <footer style={{
            position: 'relative',
            padding: '4rem 2rem',
            background: 'rgba(0,0,0,0.8)',
            marginTop: '6rem',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    {[Github, Linkedin, Twitter, Mail].map((Icon, idx) => (
                        <a key={idx} href="#" style={{
                            color: 'rgba(255,255,255,0.6)',
                            transition: 'all 0.3s',
                            padding: '10px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--color-orange)';
                                e.currentTarget.style.background = 'rgba(255,106,0,0.1)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <Icon size={20} />
                        </a>
                    ))}
                </div>

                <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} John Doe. All rights reserved. <br />
                    Built with React, Three.js & Framer Motion.
                </p>

            </div>
        </footer>
    );
};

export default Footer;

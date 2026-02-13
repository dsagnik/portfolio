import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Button3D from '../ui/Button3D';
import '../../styles/animations.css';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '0 2rem',
            overflow: 'hidden'
        }}>

            <div style={{ maxWidth: '1200px', width: '100%', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            borderRadius: '20px',
                            background: 'rgba(255, 106, 0, 0.1)',
                            border: '1px solid rgba(255, 106, 0, 0.3)',
                            color: 'var(--color-orange)',
                            fontWeight: '600',
                            marginBottom: '1.5rem'
                        }}
                    >
                        Senior Frontend Engineer
                    </motion.div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        background: 'linear-gradient(to right, #fff, #aaa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Crafting Digital <br />
                        <span style={{ color: 'var(--color-orange)', WebkitTextFillColor: 'var(--color-orange)' }}>Perfection</span>
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '2.5rem',
                        maxWidth: '500px'
                    }}>
                        I build elite web experiences with modern tech. Specializing in high-performance React applications, 3D interactivity, and scalable architecture.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <Button3D variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Work <ArrowRight size={18} />
                        </Button3D>

                        <Button3D variant="secondary">
                            Download CV <Download size={18} />
                        </Button3D>
                    </div>
                </motion.div>

                {/* Hero Visual / Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="animate-float"
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <div style={{
                        position: 'relative',
                        width: '400px',
                        height: '500px',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255,106,0,0.3)',
                        backdropFilter: 'blur(10px)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}>
                        {/* Placeholder for Profile Image */}
                        <div style={{ textAlign: 'center', color: '#fff' }}>
                            <div style={{ width: '150px', height: '150px', background: '#333', borderRadius: '50%', margin: '0 auto 1rem' }}>
                                {/* Img tag would go here */}
                            </div>
                            <h3>John Doe</h3>
                            <p>Tech Visionary</p>
                        </div>

                        {/* Decorative Elements */}
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--color-orange)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.4 }}></div>
                        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '150px', height: '150px', background: 'blue', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.3 }}></div>
                    </div>
                </motion.div>

            </div>

            {/* Responsive Styles Injection */}
            <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          div[style*="max-width: 500px"] {
             margin-left: auto;
             margin-right: auto;
          }
          .animate-float {
            display: none !important; /* Hide image on smaller screens if needed or adjust */
          }
          /* Or better, move image to top/bottom */
           div[style*="grid-template-columns"] > div:nth-child(2) {
             order: -1;
             margin-bottom: 2rem;
             display: flex;
             justify-content: center;
           }
        }
      `}</style>
        </section>
    );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { achievementsData } from '../../data/achievementsData';

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 2rem', position: 'relative' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About <span style={{ color: 'var(--color-orange)' }}>Me</span></h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-orange)', margin: '0 auto', borderRadius: '2px' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Passionate about AI & Tech</h3>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            With over 5 years of experience in full-stack development, I specialize in building scalable web applications that solve real-world problems. My recent focus has been at the intersection of Healthcare and Artificial Intelligence.
                        </p>
                        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            I thrive in fast-paced environments where innovation is key. My background includes leading frontend teams, winning hackathons, and contributing to open-source projects.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                            <div>
                                <h4 style={{ fontSize: '2.5rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>5+</h4>
                                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Years Experience</span>
                            </div>
                            <div>
                                <h4 style={{ fontSize: '2.5rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>20+</h4>
                                <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Projects Completed</span>
                            </div>
                        </div>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {achievementsData.map((item, index) => (
                            <GlassCard key={item.id} delay={index * 0.1} className="p-6" style={{ padding: '1.5rem' }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-orange)', marginBottom: '0.5rem' }}>{item.organization}</p>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>{item.description}</p>
                            </GlassCard>
                        ))}
                    </div>

                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};

export default About;

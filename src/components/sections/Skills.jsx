import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { skillsData } from '../../data/skillsData';

const Skills = () => {
    return (
        <section id="skills" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Technical <span style={{ color: 'var(--color-orange)' }}>Arsenal</span></h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-orange)', margin: '0 auto', borderRadius: '2px' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                    {skillsData.map((category, index) => (
                        <GlassCard key={category.category} delay={index * 0.1} className="h-full" style={{ padding: '2rem', height: '100%' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-orange)', fontWeight: 'bold' }}>
                                {category.category}
                            </h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {category.skills.map(skill => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ x: 5 }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            color: 'rgba(255,255,255,0.8)',
                                            fontSize: '1rem'
                                        }}
                                    >
                                        <div style={{ width: '6px', height: '6px', background: 'var(--color-orange)', borderRadius: '50%' }}></div>
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;

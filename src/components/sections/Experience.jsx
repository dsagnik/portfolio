import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { experienceData } from '../../data/experienceData';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '8rem 2rem', position: 'relative' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>My <span style={{ color: 'var(--color-orange)' }}>Journey</span></h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-orange)', margin: '0 auto', borderRadius: '2px' }}></div>
                </motion.div>

                <div style={{ position: 'relative' }}>
                    {/* Timeline Line */}
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '2px', background: 'rgba(255,255,255,0.1)', transform: 'translateX(-50%)' }} className="timeline-line"></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                                    position: 'relative',
                                    width: '100%'
                                }}
                                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            >
                                {/* Timeline Dot */}
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '50%',
                                    width: '20px',
                                    height: '20px',
                                    background: 'var(--color-dark-bg)',
                                    border: '2px solid var(--color-orange)',
                                    borderRadius: '50%',
                                    transform: 'translate(-50%, 0)',
                                    zIndex: 2,
                                    boxShadow: '0 0 10px var(--color-orange-glow)'
                                }} className="timeline-dot"></div>

                                <GlassCard className="glass-card-experience" style={{ width: '45%', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-orange)', marginBottom: '0.5rem' }}>
                                        <Briefcase size={18} />
                                        <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>{item.period}</span>
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.role}</h3>
                                    <h4 style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>{item.company}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: '1.6' }}>{item.description}</p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1rem' }}>
                                        {item.technologies.map(tech => (
                                            <span key={tech} style={{
                                                fontSize: '0.8rem',
                                                padding: '4px 10px',
                                                borderRadius: '12px',
                                                background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                color: 'rgba(255,255,255,0.8)'
                                            }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: 20px !important; }
          .timeline-item { justify-content: flex-end !important; }
          .timeline-dot { left: 20px !important; }
          .glass-card-experience { width: 85% !important; margin-left: auto; }
        }
      `}</style>
        </section>
    );
};

export default Experience;

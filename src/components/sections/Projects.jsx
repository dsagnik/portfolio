import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { projectsData } from '../../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';
import Button3D from '../ui/Button3D';

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '8rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Featured <span style={{ color: 'var(--color-orange)' }}>Projects</span></h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-orange)', margin: '0 auto', borderRadius: '2px' }}></div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    {projectsData.map((project, index) => (
                        <GlassCard key={project.id} delay={index * 0.1} className="h-full" style={{ padding: '0', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>

                            {/* Project Image Placeholder */}
                            <div style={{
                                height: '240px',
                                background: `linear-gradient(45deg, #111, #222)`,
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/*  If actual images were used: <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />  */}
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: 'rgba(255,255,255,0.1)',
                                    fontSize: '3rem',
                                    fontWeight: 'bold'
                                }}>
                                    PROJECT {index + 1}
                                </div>

                                <div className="overlay" style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0,0,0,0.5)',
                                    opacity: 0,
                                    transition: 'opacity 0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '1rem'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                                >
                                    <Button3D variant="primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                                        Live Demo
                                    </Button3D>
                                </div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{project.title}</h3>

                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                                    {project.technologies.map(tech => (
                                        <span key={tech} style={{
                                            fontSize: '0.8rem',
                                            color: 'var(--color-orange)',
                                            background: 'rgba(255, 106, 0, 0.1)',
                                            padding: '4px 8px',
                                            borderRadius: '4px'
                                        }}>
                                            #{tech}
                                        </span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', transition: 'color 0.2s' }} className="hover:text-white">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', transition: 'color 0.2s' }} className="hover:text-white">
                                        <Github size={16} /> Code
                                    </a>
                                </div>
                            </div>

                        </GlassCard>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

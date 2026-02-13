import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button3D from '../ui/Button3D';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import '../../styles/glass.css';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        alert("Thanks for reaching out! This is a demo form.");
    };

    return (
        <section id="contact" style={{ padding: '8rem 2rem', position: 'relative' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Get In <span style={{ color: 'var(--color-orange)' }}>Touch</span></h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--color-orange)', margin: '0 auto', borderRadius: '2px' }}></div>
                    <p style={{ marginTop: '1.5rem', color: 'rgba(255,255,255,0.6)', maxWidth: '600px', margin: '1.5rem auto 0' }}>
                        Available for freelance opportunities and full-time roles. Let's build something amazing together.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '4rem', alignItems: 'start' }} className="contact-grid">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                            <div
                                className="glass-panel"
                                style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div style={{ background: 'rgba(255,106,0,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--color-orange)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Email Me</h4>
                                    <p style={{ fontSize: '1.1rem' }}>contact@example.com</p>
                                </div>
                            </div>

                            <div
                                className="glass-panel"
                                style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div style={{ background: 'rgba(255,106,0,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--color-orange)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Location</h4>
                                    <p style={{ fontSize: '1.1rem' }}>San Francisco, CA</p>
                                </div>
                            </div>

                            <div
                                className="glass-panel"
                                style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}
                            >
                                <div style={{ background: 'rgba(255,106,0,0.1)', padding: '10px', borderRadius: '50%', color: 'var(--color-orange)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>Phone</h4>
                                    <p style={{ fontSize: '1.1rem' }}>+1 (555) 123-4567</p>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: '3rem' }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        className="glass-input"
                                        style={{ padding: '12px', borderRadius: '8px', width: '100%' }}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        className="glass-input"
                                        style={{ padding: '12px', borderRadius: '8px', width: '100%' }}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>Message</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    className="glass-input"
                                    rows={5}
                                    style={{ padding: '12px', borderRadius: '8px', width: '100%', resize: 'none' }}
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <Button3D variant="primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Send Message <Send size={18} />
                            </Button3D>
                        </form>
                    </motion.div>

                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
             grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;

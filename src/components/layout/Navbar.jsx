import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import '../../styles/glass.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Skills', path: '/skills' }, // Assuming we might have a skills page or section
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'py-5 bg-transparent'}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    zIndex: 1000,
                    background: scrolled ? 'rgba(0,0,0,0.6)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(12px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
                    transition: 'all 0.3s ease'
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    <Link to="/" className="text-2xl font-bold flex items-center gap-2" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center' }}>
                        <span style={{ color: 'var(--color-orange)' }}>&lt;</span>
                        DevPort
                        <span style={{ color: 'var(--color-orange)' }}>/&gt;</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    color: location.pathname === link.path ? 'var(--color-orange)' : 'rgba(255,255,255,0.8)',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    position: 'relative',
                                    transition: 'color 0.3s'
                                }}
                                className="hover-underline"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button - simple inline style fallback for standard CSS classes if tailwind not fully active */}
                    <div className="md:hidden" style={{ display: 'none' }}>
                        {/* This will be handled by media query in global CSS or inline if needed */}
                    </div>
                    <button
                        className="md:hidden-btn"
                        onClick={toggleMenu}
                        style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', display: 'none' }} // Hidden on desktop
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'rgba(5, 5, 5, 0.95)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '2rem'
                        }}
                    >
                        <button
                            onClick={toggleMenu}
                            style={{ position: 'absolute', top: '1.5rem', right: '2rem', color: 'white', background: 'none', border: 'none' }}
                        >
                            <X size={32} />
                        </button>

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={toggleMenu}
                                style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}
                            >
                                <motion.span whileHover={{ color: 'var(--color-orange)', x: 10 }}>
                                    {link.name}
                                </motion.span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Styles for mobile responsive */}
            <style>{`
        @media (max-width: 768px) {
          .md\\:flex { display: none !important; }
          .md\\:hidden-btn { display: block !important; }
        }
      `}</style>
        </>
    );
};

export default Navbar;

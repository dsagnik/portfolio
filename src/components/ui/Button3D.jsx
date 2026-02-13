import React from 'react';
import { motion } from 'framer-motion';

const Button3D = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = {
        padding: '12px 24px',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: '600',
        position: 'relative',
        overflow: 'hidden',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
    };

    const variants = {
        primary: {
            background: 'linear-gradient(135deg, #ff6a00 0%, #ff8c00 100%)',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(255, 106, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        secondary: {
            background: 'rgba(255, 255, 255, 0.05)',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
        }
    };

    return (
        <motion.button
            style={{ ...baseStyles, ...variants[variant] }}
            className={className}
            onClick={onClick}
            whileHover={{
                scale: 1.05,
                boxShadow: variant === 'primary'
                    ? '0 0 20px rgba(255, 106, 0, 0.6)'
                    : '0 0 20px rgba(255, 255, 255, 0.1)',
                y: -3
            }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

export default Button3D;

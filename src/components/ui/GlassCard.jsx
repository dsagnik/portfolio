import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/glass.css';

const GlassCard = ({ children, className = '', hoverEffect = true, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay }}
            className={`glass-card ${className}`}
            whileHover={hoverEffect ? {
                y: -10,
                boxShadow: "0 0 25px rgba(255, 106, 0, 0.2)",
                borderColor: "rgba(255, 106, 0, 0.4)"
            } : {}}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;

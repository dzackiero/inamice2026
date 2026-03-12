"use client";

import React from 'react';
import { motion } from 'motion/react';

interface AnimatedCardProps {
    children: React.ReactNode;
    index: number;
    className?: string;
}

const AnimatedCard = ({ children, index, className = '' }: AnimatedCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;

import './BackgroundCircles.css';
import { motion } from 'framer-motion'
import React from 'react';

const BackgroundCircles = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{ duration: 2.5 }}
            className='container__circles'
        >
            <div className='circle circle__200' />
            <div className='circle circle__300' />
            <div className='circle circle__500' />
            <div className='circle circle__650' />
            <div className='circle circle__800' />
        </motion.div>
    );
};

export default BackgroundCircles;

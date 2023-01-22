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
            className='container__circles'>
            <div className='circle small200'></div>
            {/*  <div className='circle small300'></div>
            <div className='circle medium500'></div>
            <div className='circle medium650'></div>
            <div className='circle big800'></div> */}
        </motion.div>
    );
};

export default BackgroundCircles;

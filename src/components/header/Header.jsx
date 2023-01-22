import './Header.css';

import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';

import ME from '../../assets/me.png';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import TypeWriter from './TypeWriter';
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
const Header = () => {

    return (
        <header>
            <motion.div
                className='container header__container'>
                <BackgroundCircles />
                <TypeWriter />
                <h5 className='text-light'>Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div

                    className='me'>
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{
                            scale: [1, 2, 2, 3, 1],
                            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
                        }}
                        transition={{ duration: 2.5 }}
                        src={ME} alt="author's img" />
                </div>
                <a href="#contact" className='scroll__down'>
                    Scroll Down
                    <FaGreaterThan />
                </a>
            </motion.div>
        </header>
    );



    /* 

amitparmar901@gmail.com

    */
};

export default Header;
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
                <HeaderSocials />
                <TypeWriter />
                <h5 className='text-light'>Full Stack Developer</h5>
                <CTA />
                <BackgroundCircles />
                <div className='me'>
                    <img src={ME} alt="author's img" />
                </div>
                <a href="#contact" className='scroll__down'>
                    Scroll_Down
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
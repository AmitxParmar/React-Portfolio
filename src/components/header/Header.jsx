import './Header.css';

import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';

import ME from '../../assets/me.png';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header >
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Amit Parmar</h1>
                <h5 className='text-light'>Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt="author's img" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down <FaGreaterThan /> </a>

            </div>
        </header>
    );
};

export default Header;
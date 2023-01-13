import './Header.css';

import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';

import ME from '../../assets/me.png';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import TypeWriter from './TypeWriter';

const Header = () => {

    return (
        <header>
            <div className='container header__container'>
                <TypeWriter className='type_writer' />
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
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css';

import { useState } from 'react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { RiBrushLine } from 'react-icons/ri';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a title='Home' href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ''}><AiOutlineHome /></a>
            <a title='about' href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ''}><AiOutlineUser /></a>
            <a title='Experience' href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : ''}><BsBriefcase /></a>
            <a title='Projects' href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? "active" : ''}><RiBrushLine /></a>
            <a title='Contact Me' href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ''}><AiOutlineMessage /></a>
            {/* <=========commented out for now might add later ====> <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? "active" : ''}><RiServiceFill /></a> */}
        </nav>
    );
};

export default Nav;
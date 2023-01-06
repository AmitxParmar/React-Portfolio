/* eslint-disable jsx-a11y/anchor-is-valid */
import './Nav.css';

import { useState } from 'react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { RiServiceFill } from 'react-icons/ri';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ''}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : ''}><BsBriefcase /></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? "active" : ''}><RiServiceFill /></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ''}><AiOutlineMessage /></a>
        </nav>
    );
};

export default Nav;
import './Nav.css';

import React from 'react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';
import { RiServiceFill } from 'react-icons/ri';

const Nav = () => {
    return (
        <nav>
            <a href='/'><AiOutlineHome /></a>
            <a href='#about'><AiOutlineUser /></a>
            <a href='#experience'><BsBriefcase /></a>
            <a href='#services'><RiServiceFill /></a>
            <a href='#contact'><AiOutlineMessage /></a>
        </nav>
    );
};

export default Nav;
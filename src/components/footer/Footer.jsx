/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.css';

import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>AmitxParmar</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://facebook.com'><FaFacebookF /></a>
                <a href='https://instagram.com/amitxxparmar'><FaInstagram /> </a>
                <a href='twitter.com'><IoLogoTwitter /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; Amit Parmar. All rights reserved.</small>
            </div>

        </footer>
    );
};

export default Footer;
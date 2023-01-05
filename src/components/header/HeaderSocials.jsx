import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href='https://www.linkedin.com/in/amit-parmar-665002221' target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
            <a href='https://github.com/amitxparmar' target='_blank' rel="noreferrer"><FaGithub /></a>
            <a href='https://www.facebook.com/arme.itizer.9/' target='_blank' rel="noreferrer"><FaFacebookF /></a>
            <a href='https://twitter.com/AmitxParmar' target='_blank' rel="noreferrer"><FaTwitter /></a>
            <a href='https://instagram.com/amitxxparmar' target='_blank' rel="noreferrer"><FaInstagram /></a>
        </div>
    );
};

export default HeaderSocials;
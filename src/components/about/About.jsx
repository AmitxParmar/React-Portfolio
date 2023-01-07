import './About.css';

import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

import ME from '../../assets/me-about.jpg';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='author profile pic' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            {/* ===================================== Experience and Award Icons ========================= */}
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>
                                Web Development since June 2022
                            </small>
                        </article>
                        {/* ==================================== Experience #2: Clients ================================= */}
                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>
                                0+ currently no experience with the Clients
                            </small>
                        </article>
                        {/* ============================================== [AmitxParmar] ======================================== */}
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>
                                Instagram Clone
                            </small>
                            <small>
                                Movie Search App
                            </small>
                        </article>
                        {/* ============================================= x ========================================= */}
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aspernatur non, alias mollitia deleniti cumque, vel veritatis dolores tempora molestias, sint ad nisi aliquid debitis optio dolorum cum ratione dolorem?
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;
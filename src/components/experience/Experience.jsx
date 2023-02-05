import './Experience.css';
import { motion } from 'framer-motion'
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiJavascript, SiFirebase, SiNodedotjs, SiExpress, SiMysql, SiMongodb } from 'react-icons/si';
import { useState } from 'react';

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    viewport={{ once: false }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className='experience__frontend'>
                    <h3> Front Development </h3>
                    <div className='experience__content'>
                        <article className="experience__details">
                            <FaHtml5 />
                            <h4> HTML </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <FaCss3Alt />
                            <h4> CSS3 </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <SiJavascript />
                            <h4> JavaScript </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <FaReact />
                            <h4> ReactJS </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <SiNextdotjs />
                            <h4> NextJS </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <SiTailwindcss />
                            <h4> Tailwind </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 0.5,
                    }}
                    className='experience__backend'>
                    <h3> Back End Development </h3>
                    <div className='experience__content'>
                        <article className="experience__details">
                            <SiFirebase />
                            <h4> Firebase </h4>
                            <small className='text-light'> Intermediate </small>
                        </article>
                        <article className="experience__details">
                            <SiNodedotjs />
                            <h4> Node.js </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                        <article className="experience__details">
                            <SiExpress />
                            <h4> Express.js </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                        <article className="experience__details">
                            <SiMysql />
                            <h4> MySQL </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                        <article className="experience__details">
                            <SiMongodb />
                            <h4> MongoDB </h4>
                            <small className='text-light'> Basics </small>
                        </article>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Experience;
import './Contact.css';
import { motion } from 'framer-motion'
import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'

                >
                    <motion.article className='contact__option'
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>amitparmar901@gmail.com</h5>
                        <a href='mailto:amitparmar901@gmail.com'> Send a message </a>
                    </motion.article>
                    {/* <article className='contact__option'>
                        <MdOutlineEmail />
                        <h4>Whatsapp</h4>
                        <h5>amitparmar901@gmail.com</h5>
                        <a href='mailto:amitparmar901@gmail.com'> Send a message </a>
                    </article> */}
                    <motion.article
                        className='contact__option'
                        initial={{ y: -300, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                    >
                        <BsWhatsapp />
                        <h4>Whatsapp</h4>
                        <h5>+9191919191919</h5>
                        <a href='https://api.whatsapp.com/send?phone=+9191919191919'> Send a message </a>
                    </motion.article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action=''>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>

                    {/* I'll Integrate EmailJS later, which is a direct email service */}

                </form>
            </div>
        </section>
    );
};

export default Contact;
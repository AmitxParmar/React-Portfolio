import './Header.css';

import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const TypeWriter = () => {
    const [text] = useTypewriter(
        {
            words: [
                "Hi!, The Name's Amit Parmar",
                "Scroll Down for More",
                "<ButLovesToCodeMore />",
            ],
            loop: true,
            delaySpeed: 1000,
        }
    );

    return (
        <div className='type__writer'>
            <span>{text}</span>
            <Cursor cursorColor='#F7AB0A' />
        </div>
    );
};

export default TypeWriter;
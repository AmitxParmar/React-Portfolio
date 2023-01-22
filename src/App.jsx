import React from 'react';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
    return (
        <div className=''>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
            {/* NOTE: What's I'm trying to achieve is snap page type scroll but the sections wont let me cus components also uses sections tag */}

            {/* I might add this later <Services /> 
            <Testimonials />
            */}


        </div>
    );
};

export default App;
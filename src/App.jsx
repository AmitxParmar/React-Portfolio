import React from 'react';

import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';

const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
        </div>
    );
};

export default App;
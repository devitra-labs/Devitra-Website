'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Portofolio from '../sections/Portofolio';
import Team from '../sections/Team';
import AppCon from '../sections/Contact';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main id="main-content" className="flex-1 py-7">
                <Hero />
                <About />
                {/* <Portofolio /> */}
                <Team />
                <AppCon />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Team from '../sections/Team';
import Achievements from '../sections/Achievements';
import AppCon from '../sections/Contact';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className='py-10'>
        <Hero />
        <About />
        <Team />
        <AppCon />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
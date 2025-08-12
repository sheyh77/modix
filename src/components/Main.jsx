import React from 'react';
import "../assets/scss/main.scss";
import Banner from '../pages/Banner';
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';

function Main() {
  return (
    <main className="main">
        <Banner />
        <About />
        <Project />
        <Contact />
    </main>
  )
}

export default Main
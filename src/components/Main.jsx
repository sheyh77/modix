import React from 'react';
import "../assets/scss/main.scss";
import Banner from '../pages/Banner';
import About from '../pages/About';
import Project from '../pages/Project';

function Main() {
  return (
    <main className="main">
        <Banner />
        <About />
        <Project />
    </main>
  )
}

export default Main
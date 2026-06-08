import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main className="pt-24 lg:pt-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </main>
    </>
  );
}

export default App;
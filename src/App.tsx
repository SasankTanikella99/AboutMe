import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import Favorites from './components/Favorites';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Blog />
          <About />
          <Favorites />
          
        </main>
     
      </div>
    </ThemeProvider>
  );
}

export default App;
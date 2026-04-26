import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Screen from './components/Screen';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Screen />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/tech' element={<Skills />} />
      </Routes>
    </>
  );
}

export default App;

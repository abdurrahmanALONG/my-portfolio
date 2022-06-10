import React from 'react'
import Navbar from './Pages/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

      </Routes>
    </div>
  );
}

export default App;

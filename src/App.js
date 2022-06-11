import React from 'react'
import Navbar from './Pages/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import WorkOne from './Pages/WorkDetails/WorkOne';
import WorkTwo from './Pages/WorkDetails/WorkTwo';
import WorkThree from './Pages/WorkDetails/WorkThree';
import WorkFour from './Pages/WorkDetails/WorkFour';

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
        <Route path="/workOne" element={<WorkOne />} />
        <Route path="/workTwo" element={<WorkTwo />} />
        <Route path="/workThree" element={<WorkThree />} />
        <Route path="/workFour" element={<WorkFour />} />

      </Routes>
    </div>
  );
}

export default App;

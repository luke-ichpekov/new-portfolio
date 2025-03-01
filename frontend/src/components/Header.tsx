// src/components/Header.tsx
// import React from 'react';
import { Link } from 'react-scroll';
import ThreeBackground from './ThreeBackground';

const Header = () => {
  return (
    <>
    <ThreeBackground />
    <header className="flex items-center justify-center h-screen text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
        <p className="text-xl md:text-2xl font-light mb-8">A passionate software developer</p>
        <div className="flex justify-center gap-6">
          <Link to="about" smooth={true} duration={500} className="text-lg font-semibold hover:text-blue-400 transition-colors">
            About Me
          </Link>
          <Link to="projects" smooth={true} duration={500} className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="text-lg font-semibold hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;

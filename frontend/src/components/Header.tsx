// src/components/Header.tsx
// import React from 'react';
import { Link } from 'react-scroll';
import ThreeBackground from './ThreeBackground';
import "../App.css"
const Header = () => {
  return (
    <>
    <ThreeBackground />
    <h1>Luke Ichpekov</h1>
    <div className='mainContainer'>
      <h1>Experience</h1>
      <h1>Projects</h1>
    </div>
    </>
  );
};

export default Header;

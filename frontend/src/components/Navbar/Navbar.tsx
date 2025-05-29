import './Navbar.scss';
// import vumcLogo from '../../../public/Vumc-logo.jpg';

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='custom-navbar'>
        {/* Left Side of the navebar */}
        <Link to='/' className='navbar-left'>
            <img src='/Vanderbilt.webp' alt="VUMC Logo" className='logo' />
            <span className='lab-name'>SPHERE Lab</span>
        </Link>

        {/* Right Side of the navbar */}
        <div className='navbar-right'>
            <a href="research">Research</a>
            <a href="news">News</a>
            <a href="featured">Featured</a>
            <a href="about-us">About Us</a>
            <a href="publications">Publications</a>
        </div>
    </div>
  )
}

export default Navbar
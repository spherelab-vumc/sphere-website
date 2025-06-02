import "./Footer.scss";
import { Link } from "react-router-dom";

import React from "react";

function Footer() {
  return (
    <footer className="sphere-footer">
      {/* Left */}
      <div className="footer-left">
        <Link to="/" className="navbar-left">
          <img src="/Vanderbilt.webp" alt="VUMC Logo" className="footer-logo" />
          <span className="footer-lab-name">SPHERE Lab</span>
        </Link>
      </div>

      {/* Center */}
      <div className="footer-center">
        <h4>Contact</h4>
        <p>
          Dr. Zhijun Yin <br />
          Department of Biomedical Informatics
          <br />
          Vanderbilt University Medical Center
          <br />
          Email: zhijun.yin.1@vumc.org
        </p>
      </div>

      {/* Right */}
      <div className="footer-right">
        <h4>Quick Links</h4>
        <div className="quick-links">
          <div className="quick-left">
            <Link to="/research">Research</Link>
            <Link to="/news">News</Link>
            <Link to="/featured">Featured</Link>
          </div>
          <div className="quick-right">
            <Link to="/about-us">About Us</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/join">Join Our Lab</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

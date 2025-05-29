import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa";
import './HomePage.scss'

function HomePage() {
  const navigate = useNavigate();

  const handleScroll = () => {
    const target = document.getElementById('motivation');
    target?.scrollIntoView({behavior:'smooth'})
  }
  return (
    <>
      <div className="landing-section">
        <div className="landing-content">
          {/* Left Side */}
          <div className="landing-image">
            <img src="/SPHERE_Lab_Landing_Pic.webp" alt="SHPERE Lab" />
          </div>

          {/* Right Side */}
          <div className="landing-text">
            <h1 className="lab-name">The SPHERE Lab</h1>
            <h2 className="lab-title">
              Social Computing for Health and Well-being Research Laboratory
            </h2>
            <p className="lab-description">
              We are a research group in the Department of Biomedical
              Informatics (DBMI) at Vanderbilt University Medical Center
            </p>
            <button
              className="learn-more"
              onClick={() => navigate("/research")}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="scroll-arrow" onClick={handleScroll}>
          <FaChevronDown />
        </div>
      </div>
      <div className='motivation-section' id='motivation'>Motivation</div>
    </>
  );
}

export default HomePage
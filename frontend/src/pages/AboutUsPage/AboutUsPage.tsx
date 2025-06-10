import React from "react";
import "./AboutUsPage.scss";
import { FaLinkedin } from "react-icons/fa";
import studentData from "../../data/studentData";
import { Link } from "react-router-dom";

function AboutUsPage() {
  return (
    <div className="about-page">
      <section className="professor-section">
        <div className="professor-content">
          <div className="professor-photo">
            <img src="/students/Yinzhijun.jpg" alt="Dr. Zhijun Yin" />
          </div>

          <div className="professor-text">
            <h2>Meet Dr. Zhijun Yin</h2>
            <p>
              Zhijun Yin, Ph.D., is an Assistant Professor of Biomedical
              Informatics in the School of Medicine at Vanderbilt University. He
              is also an Assistant Professor of Computer Science in the School
              of Engineering. He received his Ph.D. degree in computer science
              and M.S. degree in biostatistics from Vanderbilt University. Prior
              to joining this department, he had research internships at Hewlett
              Packard Labs (focusing on predicting models) and IBM T.J Watson
              Research Center (focusing on health behavior analytics). He also
              holds M.E and B.E. degrees in computer science and technology from
              Beijing University of Posts and Telecommunications.
            </p>
            <a href="https://www.linkedin.com/in/zjyin/" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
              <FaLinkedin size={30}/>
            </a>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          {studentData.map((student, idx) => (
            <div className="student-card" key={idx}>
              <img src={student.image} alt={student.name} />
              <h4>{student.name}</h4>
              <p>{student.degree}</p>
              <p>{student.timeline}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Past Members */}
      <section className="alumni-section">
        <h2>Want to see our past lab members?</h2>
        <p>
          <Link to='alumni' className='alumni-link'>
            Click here to explore our alumni and past lab members
          </Link>
        </p>
      </section>
    </div>
  );
}

export default AboutUsPage;

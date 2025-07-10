// import React from 'react';
import './PublicationsPage.scss'
import publicationsData from '../../data/publicationsData';
import { FaCalendarAlt, FaLink } from "react-icons/fa";

function PublicationsPage() {
  return (
    <div className='publications-page'>
      <section className='publications-hero'>
        <div className='hero-overlay'>
          <h1 className='hero-title'>Featured Publications</h1>
          <p className='hero-subtitle'>
            Explore recent publications by our research team in the field AI, Healthcare and etics
          </p>
        </div>
      </section>

      <section className='publication-content'>
        {publicationsData.map((group, idx) => (
          <div key={idx} className='publication-year-group'>
            <div className='year-heading'>
              <FaCalendarAlt className='calendar-icon'/>
              <h2>{group.year}</h2>
            </div>
            <ul className='publication-list'>
            {group.publications.map((pub, index) => (
              <li key={index} className='publication-entry'>
                <h3 className='publication-title'>
                  <a href={pub.link} target='_blank' rel='noopener noreferrer'>{pub.title}</a>
                </h3>
                <p className='publication-authors'><strong>Authors:</strong> {pub.authors}</p>
                <p className='publication-source'><strong>Source:</strong> {pub.source}</p>
                <p className='publication-keywords'>
                  <strong>Keywords:</strong> {pub.keywords.join(', ')}
                </p>
                <p className='external-link'>
                  <a href={pub.link} target='_blank' rel='noopener noreferrer'>View Publication <FaLink/></a>
                </p>
              </li>
            ))}
          </ul>
        </div>
        ))}
      </section>
      
    </div>
  )
}

export default PublicationsPage
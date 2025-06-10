import React from 'react';
import './AlumniPage.scss';
import alumniData from '../../data/alumniData';

const AlumniPage = () => {
  return (
    <div className='alumni-page'>
        <h1 className='alumni-title'>Our Lab Alumni Members</h1>
        <p className='alumni-subtitle'>We're proud of all the talented students who have contributed to our lab's success</p>

        <div className='alumni-list'>
            {alumniData.map((member, index) => (
                <div key={index} className='alumni-card'>
                    <h4>{member.name}</h4>
                    <p>{member.timeline}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AlumniPage
import React from 'react';
import { programsData } from '../const';  // Adjusted import to the new path
import '../styles/Programs.css';
import Title from './Title';

export default function Programs() {
  return (
    <div className="container programs-section">
      <Title title="OUR PROGRAM" subtitle="What We Offer" />
      <div className="programs flex align-center justify-between">
        {programsData.map((program, index) => (
          <div key={index} className="program">
            <img src={program.image} alt={`Program ${index + 1}`} />
            <div className="caption flex center-center">
              <img src={program.caption} alt={`Caption ${index + 1}`} className="text-center" />
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

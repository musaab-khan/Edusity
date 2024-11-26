import React from 'react';
import { galleryData } from '../const';  // Import the gallery data
import '../styles/Campus.css';
import Title from './Title';

export default function Campus() {
  return (
    <div className="container campus">
      <Title title="Gallery" subtitle="Campus Photos" />
      <div className="gallery flex justify-between">
        {galleryData.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
      <button className="btn">See More Here</button>
    </div>
  );
}

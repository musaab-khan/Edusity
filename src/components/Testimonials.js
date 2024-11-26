import React, { useState } from 'react';
import { testimonialsData } from '../const';  // Import the testimonials data
import '../styles/Testimonials.css';
import { backArrow, nextArrow } from '../assets/assets';
import Title from './Title';

export default function Testimonials() {
  const [translateX, setTranslateX] = useState(0);

  function slide(direction) {
    let newTranslateX = translateX;

    if (direction === 'next' && translateX > -75) {
      newTranslateX -= 25;
    } else if (direction === 'back' && translateX < 0) {
      newTranslateX += 25;
    }

    setTranslateX(newTranslateX);
    document.getElementById('slider').style.transform = `translateX(${newTranslateX}%)`;
  }

  return (
    <div className="container testimonials">
      <Title title="Testimonials" subtitle="What Students Say" />
      <div className="flex center-center">
        <img
          src={backArrow}
          alt=""
          className="arrows"
          onClick={() => slide('back')}
        />
        <div className="testimony">
          <div
            className="slider flex justify-between"
            id="slider"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="students flex justify-between text-left">
                <div className="student-info flex align-center">
                  <img src={testimonial.image} alt="" />
                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
                <p>{testimonial.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={nextArrow}
          alt=""
          className="arrows"
          onClick={() => slide('next')}
        />
      </div>
    </div>
  );
}

import React from 'react'
import '../styles/Campus.css'
import galleryImage1 from '../assets/gallery-1.png'
import galleryImage2 from '../assets/gallery-2.png'
import galleryImage3 from '../assets/gallery-3.png'
import galleryImage4 from '../assets/gallery-4.png'
import Title from './Title'

export default function Campus() {
  return (
    <div className='container campus'>
        <Title title="Gallery" subtitle="Campus Photos" />
        <div className="gallery">
            <img src={galleryImage1} alt="" />
            <img src={galleryImage2} alt="" />
            <img src={galleryImage3} alt="" />
            <img src={galleryImage4} alt="" />
        </div>
        <button className="btn">See More Here</button>
    </div>
  )
}

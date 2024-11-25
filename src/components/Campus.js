import React from 'react'
import '../styles/Campus.css'
import {gallery1,gallery2,gallery3,gallery4} from '../assets/assets'
import Title from './Title'

export default function Campus() {
  return (
    <div className='container campus'>
        <Title title="Gallery" subtitle="Campus Photos" />
        <div className="gallery">
            <img src={gallery1} alt="" />
            <img src={gallery2} alt="" />
            <img src={gallery3} alt="" />
            <img src={gallery4} alt="" />
        </div>
        <button className="btn">See More Here</button>
    </div>
  )
}

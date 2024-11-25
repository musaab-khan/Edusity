import React from 'react'
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='hero container flex center-center' id='home'>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        </div>
        <button className="btn">Explore More &rarr;</button>
    </div>
  )
}

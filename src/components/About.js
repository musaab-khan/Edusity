import React from 'react'
import {about, playButton} from '../assets/assets'
import '../styles/About.css'
import Title from './Title'

export default function About({ onPlayClick }) {
  return (
    <div className='container about flex align-center'>
        <div className="about-left">
                <img src={about} alt="" className='about-picture'/>
                <img src={playButton} alt="" className='play-button' onClick={onPlayClick}/>
        </div>
        <div className="about-right">
        <Title title="ABOUT UNIVERSITY" subtitle="Nurturing Tomorrow's Leaders Today" />
            <div className="description">
                <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
                <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
                <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
            </div>
        </div>
    </div>
  )
}
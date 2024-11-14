import React from 'react'
import program1 from '../assets/program1.png'
import program2 from '../assets/program2.png'
import program3 from '../assets/program3.png'
import program1Caption from '../assets/prgram1-caption.png'
import program2Caption from '../assets/prgram2-caption.png'
import program3Caption from '../assets/prgram3-caption.png'
import '../styles/Programs.css'
import Title from './Title'

export default function Programs () {
  return (
    <div className='container programs-section'>
        <Title title="OUR PROGRAM" subtitle="What We Offer" />
        <div className="programs">
            <div className="program">
                <img src={program1} alt="" />
                <div className="caption">
                    <img src={program1Caption} alt="" />
                    <p></p>
                </div>
            </div>
            <div className="program">
                <img src={program2} alt="" />
                <div className="caption">
                    <img src={program2Caption} alt="" />
                    <p></p>
                </div>
            </div>
            <div className="program">
                <img src={program3} alt="" />
                <div className="caption">
                    <img src={program3Caption} alt="" />
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

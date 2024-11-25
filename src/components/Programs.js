import React from 'react'
import {program1,program2,program3,program1Caption,program2Caption,program3Caption} from '../assets/assets'
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

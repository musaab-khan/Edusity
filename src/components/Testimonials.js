import React, { useState } from 'react';
import '../styles/Testimonials.css';
import nextArrow from '../assets/next-arrow.png';
import backArrow from '../assets/back-arrow.png';
import student1 from '../assets/student-1.png';
import student2 from '../assets/student-2.png';
import student3 from '../assets/student-3.png';
import student4 from '../assets/student-4.png';
import Title from './Title';

export default function Testimonials() {
    const [translateX, setTranslateX] = useState(0); // Track current translateX value

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
            <div className="testimonies">
                <img
                    src={backArrow}
                    alt=""
                    className="arrows"
                    onClick={() => slide('back')}
                />
                <div className="testimony">
                    <div className="slider" id="slider" style={{ transform: `translateX(${translateX}%)` }}>
                        <div className="students">
                            <div className="student-info">
                                <img src={student1} alt="" />
                                <div>
                                    <h3>Emily Willians</h3>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                        <div className="students">
                            <div className="student-info">
                                <img src={student2} alt="" />
                                <div>
                                    <h3>Emily Willians</h3>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                        <div className="students">
                            <div className="student-info">
                                <img src={student3} alt="" />
                                <div>
                                    <h3>Emily Willians</h3>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                        <div className="students">
                            <div className="student-info">
                                <img src={student4} alt="" />
                                <div>
                                    <h3>Emily Willians</h3>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
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

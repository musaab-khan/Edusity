import React, { useState } from 'react';
import '../styles/Testimonials.css';
import {backArrow,nextArrow,student1,student2,student3,student4} from '../assets/assets';
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
                    <div className="slider flex justify-between" id="slider" style={{ transform: `translateX(${translateX}%)` }}>
                        <div className="students flex justify-between text-left">
                            <div className="student-info flex align-center">
                                <img src={student1} alt="" />
                                <div>
                                    <h3>Emily Willians</h3>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                        <div className="students flex justify-between text-left">
                            <div className="student-info flex align-center">
                                <img src={student2} alt="" />
                                <div>
                                    <h3>Emily Willians</h3>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                        <div className="students flex justify-between text-left">
                            <div className="student-info flex align-center">
                                <img src={student3} alt="" />
                                <div>
                                    <h3>Emily Willians</h3>
                                    <p>Edusity, USA</p>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                        <div className="students flex justify-between text-left">
                            <div className="student-info flex align-center">
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

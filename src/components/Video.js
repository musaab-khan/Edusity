import React from 'react'
import video from '../assets/college-video.mp4'
import '../styles/Video.css'

export default function Video({ isVisible, onClose }) {
    if (!isVisible) return null;
  return (
    <div className="video-overlay" onClick={onClose}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}
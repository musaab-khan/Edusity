import React from 'react'
import {video} from '../assets/assets'
import '../styles/Video.css'

export default function Video({ isVisible, onClose }) {
  if (!isVisible) return null;
  return (
    <div className="video-overlay flex center-center" onClick={onClose}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}
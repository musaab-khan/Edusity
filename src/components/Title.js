import React from "react";
import "../styles/Title.css";


export default function Title({ title, subtitle }) {
  return (
    <div className="titles">
      <p>{title}</p>
      <h2>{subtitle}</h2>
    </div>
  )
}

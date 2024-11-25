import React, { useState } from "react";
import "../styles/Contact.css";
import {message,email,phone,location} from "../assets/assets";
import Title from "./Title";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function getResult() {
    setResult("Sending");
    setLoading(true);
    let dots = 0;
    const interval = setInterval(() => {
      dots = (dots + 1) % 4;
      setResult(`Sending${".".repeat(dots)}`);
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
      setResult("Email Sent Successfully!");
    }, 1800);
  }

  return (
    <div className="container">
      <Title title="Contact Us" subtitle="Get in Touch" />
      <div className="contact flex text-left justify-between">
        <div className="column">
          <h3 className="flex align-center">
            Send us a message <img src={message} alt="" />
          </h3>
          <p>
            Feel free to reach out through the contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <div className="contact-info">
            <div className="flex align-center">
              <img src={email} alt="" />
              <span>Contact@GreatStack.dev</span>
            </div>
            <div>
              <img src={phone} alt="" />
              <span>+1 123-456-7890</span>
            </div>
            <div>
              <img src={location} alt="" />
              <span>77 Massachusetts Ave, Cambridge MA 02139, United States</span>
            </div>
          </div>
        </div>
        <div className="column">
          <form>
            <label htmlFor="name">Your name</label>
            <input type="text" name="name" id="name" placeholder="Enter Your Name" required />
            <label htmlFor="phone">Phone Number</label>
            <input type="phone" name="phone" id="phone" placeholder="Enter your mobile number" required />
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your email id" />
            <label htmlFor="textarea">Your Message</label>
            <textarea name="textarea" id="textarea" placeholder="Enter your message"></textarea>
            <button type="submit" className="btn dark-btn" onClick={getResult} disabled={loading}>
              Submit now
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

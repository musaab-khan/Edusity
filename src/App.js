import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Programs from './components/Programs';
import About from './components/About';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Video from './components/Video';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [isVideoVisible, setVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setVideoVisible(true);
  };

  const handleCloseVideo = () => {
    setVideoVisible(false);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Programs></Programs>
      <About onPlayClick={handlePlayClick} />
      <Campus></Campus>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Video isVisible={isVideoVisible} onClose={handleCloseVideo}/>
      <Footer></Footer>
    </div>
  );
}

export default App;

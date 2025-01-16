import React from 'react';
import './Hero.css';
import '../App.css';

function Hero() {
  return (
    <div className="hero">
      <p className='oneline alegreya-700'>Job hunting, reimagined.</p>
      
      <p className='twoline alegreya-400'>
      Stay on top of your applications, streamline the process, and track your progress effortlessly <br/>—every step of the way.
      </p>
    <button>Sign Up</button>
    </div>
  );
}

export default Hero;
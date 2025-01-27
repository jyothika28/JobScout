import './App.css';
import Header from './header/Header.js';
import React from 'react';
import Hero from './hero/Hero.js';
function App() {
  // const navigate = useNavigate();
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;

import React from 'react';
import './App.css';
import Navbar from './compo/navbar';
import Feed from './compo/Feed';
import { data } from './compo/data';
import Intro from './compo/intro';
import ButtonGroup from './compo/Join';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Footer from './compo/Footer';
import NewsletterSubscription from './compo/JoinUS';

function App() {
  return (
    <Router>
      <div className='new'>
        <Navbar />
        <Routes>
          <Route exact path="/Feed" element={<Feed data={data} />} />
          <Route path="/Join" element={<ButtonGroup />} />
          <Route path="/Join" element={<ButtonGroup />} />
        </Routes>
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate3d(-50%,-50%,0)' }}>
        <h1 style={{ margin: 0, padding: 0, fontSize: '10em', fontWeight: 500, letterSpacing: '-0.05em' }}>Welcome to HackNation</h1>
        
      </div>
      <Intro />

      <div className='content'>
        <h1>Hackathons</h1>
        <h2 style={{ fontFamily: 'sans-serif' }}>Hackathons offer a fun and collaborative environment where individuals can learn new skills, network with peers and professionals, and develop innovative solutions to problems. Winning a hackathon can bring recognition and valuable experience to individuals and their teams, making it a great opportunity for personal and professional growth.
        </h2>
        <Feed data={data} />
        <span></span>
        <h1>Particpate in upcoming Hackathons by choosing below :</h1>
        <ButtonGroup />
        <span></span>
        <span></span>
        <span></span>
        <NewsletterSubscription/>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

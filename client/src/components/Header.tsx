import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="App-header">
      <div className="App-header-engg">
        <a
          href="https://www.ualberta.ca/engineering/co-op/our-program/disciplines-and-specializations/computer-engineering.html"
          target="_blank"
          rel="noreferrer"
        >
          <img className="enggIcon" src="icons/engg.png" alt="github" />
        </a>
      </div>
      <div className="App-header-nav">
        <button className="Nav-Button" onClick={() => navigate('/portfolio')}>Portfolio</button>
        <button className="Nav-Button" onClick={() => navigate('/resume')}>Resume</button>
        <button className="Nav-Button" onClick={() => navigate('/just4fun')}>Just4Fun</button>
      </div>
    </header>
  );
}

export default Header;

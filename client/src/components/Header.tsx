import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="App-header">
      <div className="App-header-engg">
        <a
          href="https://www.ualberta.ca/undergraduate-programs/bachelor-of-science-in-computer-engineering-computer-engineering.html"
          target="_blank"
          rel="noreferrer"
        >
          <img className="enggIcon" src="icons/engg.png" alt="github" />
        </a>
      </div>
      <div className="App-header-nav">
        <button className={`Nav-Button ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={() => navigate('/portfolio')}>
          <span>Portfolio</span>
          <span className="Nav-Button-border"></span>
        </button>
        <button className={`Nav-Button ${location.pathname === '/resume' ? 'active' : ''}`} onClick={() => navigate('/resume')}>
          <span>Resume</span>
          <span className="Nav-Button-border"></span>
        </button>
        <button className={`Nav-Button ${location.pathname === '/just4fun' ? 'active' : ''}`} onClick={() => navigate('/just4fun')}>
          <span>Just4Fun</span>
          <span className="Nav-Button-border"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;

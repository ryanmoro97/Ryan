import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="App-footer-icons">
        <a href="mailto:r.moro@outlook.com?subject=Come work for us pretty pleeease">
          <img className='footerIcon' src="icons/email.svg" alt="email" />
        </a>
        <a href="https://github.com/ryanmoro97" target="_blank" rel="noreferrer">
          <img className='footerIcon' src="icons/github.svg" alt="github" />
        </a>
      </div>
      <div className='App-footer-pub'>
        Ryan Moro © 2023
      </div>
    </footer>
  );
}

export default Footer;

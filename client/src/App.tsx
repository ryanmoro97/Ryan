import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-home">
          Ryan Moro
        </div>
        <div className="App-header-nav">
          <button className = "Nav-Button">Home</button>
          <button className = "Nav-Button">Resume</button>
          <button className = "Nav-Button">Jussfsdt4Fun</button>
        </div>
      </header>
      <main className="App-body">
        <h1>Portfolio</h1>
      </main>
      <footer className="App-footer">
        <div className="App-footer-icons">
          <a href="https://www.example.com">
            <img src="icon1.png" alt="Icon 1" />
          </a>
          <a href="https://www.example.com">
            <img src="icon2.png" alt="Icon 2" />
          </a>
        </div>
        <p>Ryan Moro © 2023</p>
      </footer>
    </div>
  );
}

export default App;

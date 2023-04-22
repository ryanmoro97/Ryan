import React from 'react';
import '../styles/Footer.css';
import '../styles/Body.css';

import axios from 'axios';
const API_URL = process.env.API_URL || 'localhost:8008';

function Resume() {

  const downloadResumePDF = async () => {
    try {
        axios({
            url: `http://${API_URL}//pdfs/RyanMoro_Resume.pdf`, 
            method: 'GET',
            responseType: 'blob', 
        }).then((response) => {
            const href = URL.createObjectURL(response.data);
            const link = document.createElement('a');
            link.href = href;
            link.setAttribute('download', 'RyanMoro_Resume.pdf'); 
            document.body.appendChild(link);
            link.click();

            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App-body">
      <img src="/resume.png" alt="Resume" />
      <button className='download-button' onClick={downloadResumePDF}>
        <img className="footerIcon" src="icons/download.svg" alt="downloadPDF" />
      </button>
    </div>
  );
}

export default Resume;
import React from 'react';
import '../styles/Body.css';
import Skills from '../components/Skills';
import Projects from '../resources/Projects';

function Body() {
  return (
    <main className="App-body">
    <div className='App-body-header'>
      <div className = "personal-summary">
      <p style={{ whiteSpace: 'pre-line' }}>
      <span style={{ fontSize: '24px' }}>H</span>i, my name is 
      <span style={{ fontSize: '24px' }}> Ryan Moro </span> 
      {`and I recently graduated from the University of Alberta with a BSc. in Computer Engineering. 
      \n\tThroughout my education and previous work experience, I've gained exposure to a wide range of tools and technologies in both software and hardware domains, as well the integration between them. 
      \n\tMy recent focus has been learning modern web technologies and I am interested to pursue a career in software engineering or full-stack development.
      `
      }
      </p> 
      </div>
      <Skills/>
    </div>
    <div className="project-container">
      {Projects.map((project) => (
        <div className="project-wrapper" key={project.id}>
          <div className="project">
            <div className="project-info" onClick={() => window.open(project.link, "_blank")}>
              <p>{project.description}</p>
              {project.tools ? <p>{project.tools}</p> : null}
              <div className="project-header">
              <h2>{project.name}</h2>
              </div>
              <img src={`http://localhost:8008/images/${project.image}`} alt={project.name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
  );
}

export default Body;

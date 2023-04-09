import React, { useState, useEffect } from 'react';
// import _ from 'lodash';

import '../styles/skills.css';

interface SkillPosition {
  x: number;
  y: number;
  dirX: number;
  dirY: number;
  fontSize: number;
}

function Skills() {
  // console.log("mounted")
  const skillsSW = [
    'JavaScript',
    'Java',
    'C++',
    'Python',
    'C#',
    'VBA',
    'GraphQL',
    'PHP',
    'SQL',
    'HTML',
    'CSS',
  ];
  const skillsDB = [
    'MongoDB',
    'Firebase',
    'MS Access',
    'MySQL',
    'PostgreSQL',
    'SQLite'
  ];
  const skillsTools = [
    'Git',
    'Android Studio',
    'VSCode',
    'React',
    'React Native',
    'JUnit',
    'Node.js',
    'MATLAB',
    'Linux/Unix',
    '.NET core'
  ];

  const skillsHW = [
    'Arduino',
    'LTSpice',
    'Circuit Design',
    '',
    'Oscilloscope',
    '',
    'FPGAs',
  ];

  const skills = [
    ...skillsSW.map(name => ({ name, type: 1 })),
    ...skillsDB.map(name => ({ name, type: 2 })),
    ...skillsTools.map(name => ({ name, type: 3 })),
    ...skillsHW.map(name => ({ name, type: 4 }))
  ];
  
  
  const [positions, setPositions] = useState<SkillPosition[]>([]);
  const [speed, setSpeed] = useState(0.01);
  const [angle, setAngle] = useState(1);

  const centerX = 350;
  const centerY = 250;

  useEffect(() => {
    // console.log('useEffectInitial');
    const numSkills = skills.length;
    const radius = 200;
    const center = { x: 275, y: 200 };
    const positions = [];
  
    for (let i = 0; i < numSkills; i++) {
      const angle = i * ((2 * Math.PI) / numSkills);
      const x = center.x + radius * Math.cos(angle)+5;
      const y = center.y + radius * Math.sin(angle)+5;
      const dirX = (i % 2 === 0 ? 1 : -1);
      const dirY = (i % 3 === 0 ? 1 : -1);
      const fontSize = 14;
      positions.push({ x, y, dirX, dirY, fontSize });
    }

    setPositions(positions);
    // console.log(positions)
  }, [skills.length]);

  useEffect(() => {
    // console.log('useEffect');
    const updatePositions = () => {
      // const mouseX = 350;
      // const mouseY = 250;
      const mouseX = centerX + Math.cos(angle) * 150;
      const mouseY = centerY + Math.sin(angle) * 150;

      const newPositions = positions.map((pos) => {
        let newDirX = pos.dirX;
        let newDirY = pos.dirY;
        let newX = pos.x + (mouseX - centerX) * newDirX * speed;
        let newY = pos.y + (mouseY - centerY) * newDirY * speed;
        if (newX <= 0) {
          newDirX *= -1;
          newX = 0;
        } else if (newX >= 500) {
          newDirX *= -1;
          newX = 500;
        }
        if (newY <= 5) {
          newDirY *= -1;
          newY = 5;
        } else if (newY >= 450) {
          newDirY *= -1;
          newY = 450;
        }

        return {
          x: pos.x + (mouseX - centerX) * newDirX * speed, 
          y: pos.y + (mouseY - centerY) * newDirY * speed,
          dirX: newDirX,
          dirY: newDirY,
          // fontSize: Math.abs(pos.x - centerX+100)/20 + Math.abs(pos.y - centerY+10)/15,
          fontSize: (Math.abs(newX-centerX+100)*1.5 + Math.abs(newY-centerY)+50)/25,
        };
      });
      if (newPositions.length > 0) {
        setPositions(newPositions);
      }
      // console.log(positions)
    };
    requestAnimationFrame(updatePositions);
  }, [positions, angle, speed]);

  // const handleMouseMove = _.debounce((event: MouseEvent) => {
  function handleMouseMove(event: MouseEvent) {
    const container = document.querySelector('.skills-container');
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const mouseX = event.clientX - containerRect.left;
      const mouseY = event.clientY - containerRect.top;
      // console.log(mouseX, mouseY)
      if(mouseX > 0 && mouseY > 0 && mouseX < 2*centerX && mouseY < 2*centerY){
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        setSpeed((Math.sqrt((dx) * (dx) + (dy) * (dy))) / 5000);
        setAngle(Math.atan2(dy, dx));
      }
    }
  // }, 10)
  }
  useEffect(() => {
    // console.log('useEffectMoussse');
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="skills-container">
      <div className="skills">
        {positions.map((pos, index) => {
          const skill = skills[index];
          if (!skill) {
            return null;
          }
          const color = skill.type === 1 ? '#0da100' : skill.type === 2 ? '#00aabd' : skill.type === 3 ? '#a380e8' : '#7300cc';
          return (
            <div
              key={index}
              className="skill"
              style={{ transform: `translate(${pos.x}px, ${pos.y}px)`, 
              color: color,
              fontSize: pos.fontSize 
              }}
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

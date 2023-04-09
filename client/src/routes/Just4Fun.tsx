import React, { useState, useEffect } from 'react';
import '../styles/J4F.css';
import { Link } from 'react-router-dom';

const Just4Fun: React.FC = () => {
  const [iconRootCoords, setIconRootCoords] = useState(0);
  const [iconEarthCoords, setIconEarthCoords] = useState(0);
  const [iconLightningCoords, setIconLightningCoords] = useState(0);
  const [rootWidth, setRootWidth] = useState(0);
  const [lvl2icons, setLvl2Icons] = useState({first: '', second: '',firstLink: '', secondLink: ''});  

  useEffect(() => {
    const root = document.querySelector('.root');
    const iconRoot = document.querySelector('.j4fIconRoot');
    const earth = document.querySelector('.j4fIconEarth');
    const lightning = document.querySelector('.j4fIconLightning');
    const lvl2 = document.getElementById('lvl2');

    if (root && iconRoot && earth && lightning) {
      const updateCoords = () => {
        setTimeout(() => {
          const rootWidth = root.getBoundingClientRect().width;
          const iconRootRect = iconRoot.getBoundingClientRect();
          const iconRootX = iconRootRect.left + (iconRootRect.width / 2);
          const iconLightningRect = lightning.getBoundingClientRect();
          const iconLightningX = iconLightningRect.left + iconLightningRect.width;
          const iconEarthRect = earth.getBoundingClientRect();
          const iconEarthX = iconEarthRect.left;
          setIconEarthCoords(iconEarthX);
          setRootWidth(rootWidth);
          setIconRootCoords(iconRootX);
          setIconLightningCoords(iconLightningX);
          if(lvl2){
            lvl2.style.display ='none';
          }
        }, 20);
      };
      updateCoords();

      const showlvl2 = (option: string) => {
        if(lvl2){
          lvl2.style.display = 'none';
        }
        const lvl1iconRootE = document.querySelector('.j4fIconEarth');
        const lvl1iconRootL = document.querySelector('.iconDivL');
        if(option === "earth" && lvl1iconRootE){
          setLvl2Icons({first: 'icons/mtn.svg', second: 'icons/fishy.svg', firstLink: '/Mtns', secondLink: '/Fish'});
        }
        else if(option === "lightning" && lvl1iconRootL){
          setLvl2Icons({first: 'icons/bike.svg', second: 'icons/ski.svg', firstLink: '/Bikes', secondLink: '/Ski'});
        }
        if(lvl2){
          lvl2.style.display = 'block';
        }

      }
      window.addEventListener('resize', updateCoords);
      earth.addEventListener('click', () => showlvl2("earth"));
      lightning.addEventListener('click', () => showlvl2("lightning"));
      
      return () => {
        window.removeEventListener('resize', updateCoords);
      };
    }
  }, [iconRootCoords, iconEarthCoords, iconLightningCoords, rootWidth]);
  
  return (
    <div className='App-bodyy'>
      <div className='root'>
        <img className="j4fIconRoot" src="icons/roots.svg"/>
      </div>
      <div className='pointy-lines'>
        {iconLightningCoords >= 0 && rootWidth >= 0 && (
          <svg width="50%" height="100px">
            <line x1={iconRootCoords-40} y1={0} x2={iconLightningCoords} y2={100} stroke="#DEB992"/>
          </svg>
        )}
        {iconEarthCoords >= 0 && rootWidth >= 0 && (
          <svg width="50%" height="100px">
            <line x1={40} y1={0} x2={(iconEarthCoords)-rootWidth/2} y2={100} stroke="#DEB992"/>
          </svg>
        )}
      </div>
      <div className = 'j4fLevel1'>
        <div className='iconDivL'>
          <img className="j4fIconLightning" src="icons/lightning.svg"/>
        </div>
        <div className='iconDivE'>
          <img className="j4fIconEarth" src="icons/earth.svg"/>
        </div>
      </div>

      
      <div id='lvl2' className = 'lvl2'>
        <div className='j4fLevel2'>
          <div className='iconDivL21'>
            <Link to={lvl2icons.firstLink}>
              <img className='j4fIcon2' src={lvl2icons.first}/>
            </Link>
          </div>
          <div className='iconDivL22'>
            <Link to={lvl2icons.secondLink}>
              <img className='j4fIcon2' src={lvl2icons.second}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Just4Fun;

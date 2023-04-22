import React from 'react';
import ImageComponent from '../components/Image';
import '../styles/images.css';

const Mtns: React.FC = () => {

  const images = [];

  for (let i = 1; i <= 24; i++) {
    images.push(`mtn${i}.jpeg`);
  }
  
  return (
    <div>
      <ImageComponent images={images} />
    </div>
  );
};

export default Mtns;

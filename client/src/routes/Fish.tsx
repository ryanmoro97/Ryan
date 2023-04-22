import React from 'react';
import ImageComponent from '../components/Image';
import '../styles/images.css';

const Fish: React.FC = () => {
  const images = [];

  for (let i = 1; i <= 26; i++) {
    images.push(`fishy${i}.jpg`);
  }
  
  return (
    <div>
      <ImageComponent images={images} />
    </div>
  );
};


export default Fish;

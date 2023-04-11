import React from 'react';
import ImageComponent from '../components/Image';
import '../styles/images.css';

const Fish: React.FC = () => {
  const images = [];

  for (let i = 1; i <= 5; i++) {
    images.push({
      src: `fishy/fishy${i}.jpg`,
      alt: `Image ${i}`
    });
  }
  
  return (
    <div>
      <div className="images">
      {images.map((image, index) => (
        <ImageComponent key={index} src={image.src} alt={image.alt} />
      ))}
      </div>
    </div>
  );
};


export default Fish;

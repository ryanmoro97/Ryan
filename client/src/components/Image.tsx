import React, { useState } from 'react';
import '../styles/ImageComponent.css';
const API_URL = process.env.API_URL || 'localhost:8008';

const ImageComponent: React.FC<{ images: string[] }> = ({ images }) => {
  console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const currentImages = [
    { className: 'left2-image', index: currentIndex - 2 },
    { className: 'left-image', index: currentIndex - 1 },
    { className: 'center-image', index: currentIndex },
    { className: 'right-image', index: currentIndex + 1 },
    { className: 'right2-image', index: currentIndex + 2 },
  ]

  return (
    <div className="image-slideshow">
      <div>
      <button onClick={prevImage}>
        <img className="arrow" src="icons/left.svg" alt="left" />
      </button>
      </div>
      <div className="images-container">
        {currentImages.map(({ className, index }) => (
          <img
            key={index}
            className={className}
            src={`http://${API_URL}/api/images/${images[(index + images.length) % images.length]}`}
            alt={className}
          />
        ))}
      </div>
      <div>
        <button onClick={nextImage}>
          <img className="arrow" src="icons/right.svg" alt="right" />
        </button>
      </div>
    </div>
  );
  
  
}

export default ImageComponent;

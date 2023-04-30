import React, { useState } from 'react';
import '../styles/ImageComponent.css';
const API_URL = process.env.REACT_APP_API_URL || 'localhoSFSst:8008';

const ImageComponent: React.FC<{ images: string[] }> = ({ images }) => {
  console.log('API_URL:', process.env.REACT_APP_API_URL);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const currentImages = [
    { className: 'left2-image', index: currentIndex - 3 },
    { className: 'left2-image', index: currentIndex - 2 },
    { className: 'left-image', index: currentIndex - 1 },
    { className: 'center-image', index: currentIndex },
    { className: 'right-image', index: currentIndex + 1 },
    { className: 'right2-image', index: currentIndex + 2 },
    { className: 'right2-image', index: currentIndex + 3 },
  ];
  const imagePositions = [
    { translate: -135, rotate: -90, opacity: 0.2, scale: 0.4 },
    { translate: -125, rotate: -70, opacity: 0.2, scale: 0.6 },
    { translate: -85, rotate: -45, opacity: 0.2, scale: 0.8 },
    { translate: 0, rotate: 0, opacity: 5, scale: 1 },
    { translate: 85, rotate: 45, opacity: 0.2, scale: 0.8 },
    { translate: 125, rotate: 70, opacity: 0.2, scale: 0.6 },
    { translate: 135, rotate: 90, opacity: 0.2, scale: 0.4 },
  ];

  return (
    <div className="image-slideshow">
      <div>
        <button onClick={prevImage}>
          <img className="arrow" src="icons/left.svg" alt="left" />
        </button>
      </div>
      <div className="images-container">
        {currentImages.map(({ className, index}) => {
          const position = (index - currentIndex + images.length) % imagePositions.length;
          const offset = images.length % imagePositions.length - 3;
          const relativePos = (position + imagePositions.length - offset) % imagePositions.length;
          const transforms = imagePositions[relativePos]
          
          return (
            <img
              key={index}
              className={className}
              style={{
                transform: `translateX(${transforms.translate}%) perspective(1000px) rotateY(${transforms.rotate}deg) scale(${transforms.scale})`,
                opacity: transforms.opacity,
                transition: 'all 0.5s ease',
                width :'35vh',
              }}
              src={`${API_URL}/api/images/${images[(index + images.length) % images.length]}`}
              alt={`image-${index+1}`}
            />
          );
        })}
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

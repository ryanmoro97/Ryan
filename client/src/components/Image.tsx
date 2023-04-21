import React, { useState } from 'react';
import '../styles/ImageComponent.css';
const API_URL = process.env.API_URL;

const ImageComponent: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`image-component ${isExpanded ? 'expanded' : ''}`}
      onClick={handleClick}
    >
      <img src={`http://${API_URL}/api/images/${src}`} alt={alt} />
      {/* <img src={`http://localhost:8008/images/${src}`} alt={alt} /> */}
      {isExpanded && <div className="image-overlay"></div>}
    </div>
  );
}

export default ImageComponent;

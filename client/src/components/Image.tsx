import React, { useState } from 'react';
import '../styles/ImageComponent.css';

interface ImageComponentProps {
  src: string;
  alt: string;
}

function ImageComponent({ src, alt }: ImageComponentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`image-component ${isExpanded ? 'expanded' : ''}`}
      onClick={handleClick}
    >
      <img src={`http://localhost:8008/images/${src}`} alt={alt} />
    </div>
  );
}

export default ImageComponent;

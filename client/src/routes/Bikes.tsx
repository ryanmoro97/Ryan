import React from 'react';
import YouTube from 'react-youtube';
import ImageComponent from '../components/Image';
import '../styles/images.css';

const Bikes: React.FC = () => {
  const videoIds = [
    'grXxvrzPh5A',
    '2jks1Tu_o5M',
    'Dvq_Ee0PM8w',
    'IxADdTjHiXk',
    'NzLSyZ7Iads',
    '5Ory3hXAvV0',
    'JpfKNeGrVtI',
    '6764_x7BDEI',
    '7E-FX8B46aw',
    'KdwmU7FVGDo',
    '4AHecQ00d1Y',
    'OehtU4Z-yT8',


  ];
  const images = [
    { src: 'bike1.jpg', alt: 'Image 1' },
    { src: 'bike2.png', alt: 'Image 2' },
    { src: 'bike3.png', alt: 'Image 3' },
    { src: 'bike4.jpg', alt: 'Image 4' },
    { src: 'bike5.png', alt: 'Image 5' },
    { src: 'bike8.png', alt: 'Image 6' },
    
  ];

  return (
    <div>
      <div className="images">
      {images.map((image, index) => (
        <ImageComponent key={index} src={image.src} alt={image.alt} />
      ))}
      </div>
      <div className='videos'>
      {videoIds.map(videoId => (
        <YouTube videoId={videoId} key={videoId} />
      ))}
    </div>

    </div>
  );
};

export default Bikes;

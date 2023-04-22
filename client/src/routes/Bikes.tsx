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
    'w-TCy0U1HR4',
    '5Ory3hXAvV0',
    'ruyIXYhOHPw',
    'JpfKNeGrVtI',
    '6764_x7BDEI',
    '7E-FX8B46aw',
    'KdwmU7FVGDo',
    '4AHecQ00d1Y',
    'OehtU4Z-yT8',
  ];

  const images = [
    'bike1.jpg', 
    'bike2.png', 
    'bike3.png', 
    'bike4.jpg', 
    'bike5.png',
    'bike8.png',
  ];

  return (
    <div>
      <div>
        <ImageComponent images={images} />
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

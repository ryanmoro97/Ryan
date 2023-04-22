import React from 'react';
import YouTube from 'react-youtube';

const Ski: React.FC = () => {
  const videoIds = [
    'HxV0LpYcYoU',
    '0AU3hU581sY',
    'LYAozFHtiwQ',
  ];
  
  return (
    <div className='videos'>
      {videoIds.map(videoId => (
        <YouTube videoId={videoId} key={videoId} />
      ))}
    </div>
  );
};

export default Ski;

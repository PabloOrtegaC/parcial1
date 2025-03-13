import React from 'react';

const ImageCard = ({ 
  backgroundUrl, 
  text, 
  width = '150px', 
  height = '150px',
  padding = '0.5rem'
}) => {
  const containerStyle = {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width,
    height,
    position: 'relative',
    color: 'white',
    cursor: 'pointer' // Indicates the card is clickable
  };

  const textStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    fontSize: '1rem',
    padding 
  };

  const handleClick = () => {
    console.log('Image card clicked!');
  };

  return (
    <div style={containerStyle} onClick={handleClick}>
      <div style={textStyle}>{text}</div>
    </div>
  );
};

export default ImageCard;

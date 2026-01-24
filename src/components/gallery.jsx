import React from 'react';

const Gallery = ({ imageUrl }) => {
  return (
    <div>
      <img 
        width="300" 
        height="385" 
        src={imageUrl} 
        alt="3D принтер"
        style={{ borderRadius: "8px" }}
      />
    </div>
  );
};

export default Gallery;
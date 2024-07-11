// src/components/BackgroundChanger.js
import React, { useState } from 'react';

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState('#ffffff');

  const handleChangeColor = () => {
    const newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  return (
    <div>
      <button onClick={handleChangeColor}>Change Background Color</button>
    </div>
  );
};

export default BackgroundChanger;

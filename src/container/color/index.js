import React, { useState, useCallback } from 'react';
import { SketchPicker } from 'react-color';

const ColorTool = () => {
  const [color, SetColor] = useState('#FFFFFF');
  const intColor = parseInt(color.replace('#', ''), 16);

  const updateColor = useCallback((color, event) => {
    SetColor(color.hex);
  }, []);

  return (
    <>
      <SketchPicker color={color} onChange={updateColor} />
      <p>Biome Color: {intColor}</p>
    </>
  )
};

export default ColorTool;

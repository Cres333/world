import React, { useContext, useEffect, useState, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { WorldContext } from '../root';

const useStyles = makeStyles({
  field: {
    margin: 16,
  },
});

const ColorTool = () => {
  const style = useStyles();
  const { dispatch } = useContext(WorldContext);
  const [color, SetColor] = useState('#FFFFFF');
  const intColor = parseInt(color.replace('#', ''), 16);
  
  useEffect(() => {
    dispatch({ type: 'scene', payload: 'color' });
  }, [dispatch]);

  const updateColor = useCallback((color) => {
    SetColor(color.hex);
  }, []);

  const convertColor = useCallback((event) => {
    const num = parseInt(event.target.value, 10);
    const colorNum = 0 <= num && num <= 0xffffff ? num : 0;
    SetColor('#' + colorNum.toString(16).padStart(6, '0'));
  }, []);

  return (
    <>
      <SketchPicker color={color} onChange={updateColor} />
      <TextField className={style.field} label="Biome Color" variant="filled" value={intColor} onChange={convertColor} />
    </>
  )
};

export default ColorTool;

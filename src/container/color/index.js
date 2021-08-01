import React, { useContext, useEffect, useState, useCallback } from 'react';
import { SketchPicker } from 'react-color';
import { Paper, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { WorldContext } from '../root';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
      <Typography variant="h6" color="textSecondary">{'バイオームの色に変換してくれるやつ(適当版)'}</Typography>
      <TextField className={style.field} label="Biome Color" variant="filled" value={intColor} onChange={convertColor} />
      <div className={style.root}>
        <SketchPicker color={color} onChange={updateColor} />
        <Paper elevation={3} style={{ margin: 8, width: 256, height: 256, backgroundColor: color }}/>
      </div>
    </>
  )
};

export default ColorTool;

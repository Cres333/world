import React, { useContext, useEffect } from 'react';
import { WorldContext } from '../root';

const Maps = () => {
  const { dispatch } = useContext(WorldContext);
  
  useEffect(() => {
    dispatch({ type: 'scene', payload: '配布マップ一覧' });
  }, [dispatch]);

  return (
    <p>開発中</p>
  )
};

export default Maps;

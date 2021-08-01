import React, { useContext, useEffect } from 'react';

import { WorldContext } from '../root';

const Top = () => {
  const { dispatch } = useContext(WorldContext);

  useEffect(() => {
    dispatch({ type: 'scene', payload: 'top' });
  }, [dispatch]);

  return (
    <p>左上のメニューアイコンから選択</p>
  )
};

export default Top;

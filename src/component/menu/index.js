import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import ColorLensIcon from '@material-ui/icons/ColorLens';

import { WorldContext } from '../../container/root';

const Menu = () => {
  const { store, dispatch } = useContext(WorldContext);
  
  const onClick = useCallback(() => {
    dispatch({ type: 'menuToggle' });
  }, [dispatch]);

  return (
    <Drawer open={store.menu}>
      <List>
        <ListItem button component={Link} to="/world/maps" onClick={onClick}>
          <MapIcon style={{ marginRight: 8 }} />
          <ListItemText primary="配布マップ一覧"/>
        </ListItem>
      </List>
      <List>
        <ListItem button component={Link} to="/world/color" onClick={onClick}>
          <ColorLensIcon style={{ marginRight: 8 }} />
          <ListItemText primary="カラーツール"/>
        </ListItem>
      </List>
    </Drawer>
  )
};

export default Menu;

import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { WorldContext } from '../../container/root';

const Header = () => {
  const { store, dispatch } = useContext(WorldContext);
  return (
    <AppBar>
      <Toolbar>
        <IconButton style={{ marginRight: 8 }} onClick={() => { dispatch({ type: 'menuToggle' }) }}>
          <MenuIcon />
        </IconButton>
        <Typography style={{ marginRight: 16 }} variant="h6" color="inherit">Keiduki Minecraft World</Typography>
        <Typography variant="h6" color="inherit">{store.title}</Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
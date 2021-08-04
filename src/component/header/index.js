import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { WorldContext } from '../../container/root';
import { PageTable } from '../../utils/constant';

const Header = () => {
  const { store, dispatch } = useContext(WorldContext);
  const title = PageTable?.[store.scene]?.title ?? '';

  return (
    <AppBar>
      <Toolbar>
        <IconButton style={{ marginRight: 8 }} onClick={() => { dispatch({ type: 'menuToggle' }) }}>
          <MenuIcon />
        </IconButton>
        <Typography style={{ marginRight: 16 }} variant="h6" color="inherit">Keiduki Minecraft Note</Typography>
        <Typography variant="h6" color="inherit">{title}</Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Header;
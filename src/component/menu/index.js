import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Divider, Typography, IconButton, List, ListSubheader, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ColorLensIcon from '@material-ui/icons/ColorLens';

import { WorldContext } from '../../container/root';
import { PageTable } from '../../utils/constant';

const useStyles = makeStyles((theme) => ({
  icon: {
    justifyContent: 'flex-end',
  },
  item: {
    marginRight: 8,
  },
}));

const Menu = () => {
  const styles = useStyles();
  const { store, dispatch } = useContext(WorldContext);
  
  const onClick = useCallback(() => {
    dispatch({ type: 'menuToggle' });
  }, [dispatch]);

  return (
    <Drawer open={store.menu}>
      <IconButton className={styles.icon} onClick={onClick}>
        <Typography>Menu</Typography>
        <ChevronLeftIcon />
      </IconButton>
      <Divider />
      <List component="nav" aria-labelledby="test" subhader={<ListSubheader component="div" id="test">test</ListSubheader>}>
        <ListItem button component={Link} to={PageTable['maps'].path} replace onClick={onClick}>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary={PageTable['maps'].title}/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to={PageTable['color'].path} replace onClick={onClick}>
          <ListItemIcon>
            <ColorLensIcon />
          </ListItemIcon>
          <ListItemText primary={PageTable['color'].title} />
        </ListItem>
      </List>
    </Drawer>
  )
};

export default Menu;

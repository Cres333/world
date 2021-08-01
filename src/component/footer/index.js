import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
      <Typography >{`Copyright © 2021 Keiduki`}</Typography>
    </AppBar>
  )
};

export default Footer;
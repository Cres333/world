import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Logo from '../../component/logo';

const useStyles = makeStyles({
  button: {
    margin: 8,
  },
});

function Root() {
  const style = useStyles();
  return (
    <>
      <Logo />
      <Grid spacing={8}>
        <Button
          className={style.button}
          variant="contained"
          component={Link}
          to="/world/maps"
        >
          配布マップ
        </Button>
        <Button
          className={style.button}
          variant="contained"
          component={Link}
          to="/world/color"
        >
          カラーツール
        </Button>
      </Grid>
    </>
  );
}

export default Root;

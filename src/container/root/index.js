import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Logo from '../../component/logo';
import './style.css';

const useStyles = makeStyles({
  button: {
    margin: 8,
  },
});

function Root() {
  const style = useStyles();
  return (
    <div className="Root">
      <header className="Root-header">
        <Logo />
        <Button
          className={style.button}
          variant="contained"
          component={Link}
          to="/world/maps"
        >
          配布マップ
        </Button>
      </header>
    </div>
  );
}

export default Root;

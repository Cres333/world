import React, { useContext, useEffect, useCallback } from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import maps from '../../assets/maps';
import { WorldContext } from '../root';

const useStyles = makeStyles({
  version: {
    fontSize: 14,
  },
  title: {
    marginTop: 4,
    marginBottom: 8,
    fontSize: 24,
  },
  info: {
    fontSize: 14,
    textAlign: 'left',
  },
  description: {
    marginTop: 8,
    textAlign: 'left',
  },
});

const Map = React.memo((props) => {
  const open = useCallback(() => {
    window.open(props.url);
  }, [props.url]);

  return (
    <Grid item key={`card-${props.index}`}>
      <Card >
        <CardContent style={{ width: 400, height: 200, backgroundColor: '#ccddff' }} >
          <Typography className={props.styles.small} color="textSecondary" gutterBottom>{'バージョン: ' + props.version}</Typography>
          <Typography className={props.styles.title}>{props.title}</Typography>
          <Typography className={props.styles.info} color="textSecondary" gutterBottom>{'- ジャンル: ' + props.junre}</Typography>
          <Typography className={props.styles.info} color="textSecondary" gutterBottom>{'- プレイ人数: ' + props.player}</Typography>
          <Typography className={props.styles.info} color="textSecondary" gutterBottom>{'- 推定プレイ時間: ' + props.time}</Typography>
          <Typography className={props.styles.description}>{props.description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={open}>
            別サイトでダウンロード
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
});

const Maps = () => {
  const styles = useStyles();
  const { dispatch } = useContext(WorldContext);

  useEffect(() => {
    dispatch({ type: 'scene', payload: 'JE版 配布マップ一覧' });
  }, [dispatch]);

  const MapCard = maps.map((value, index) => <Map {...value} index={index} styles={styles} />);
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{ marginTop: 100}}>
      {MapCard}
    </Grid>
  );
};

export default Maps;

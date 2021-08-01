import React, { useContext, useEffect, useCallback } from 'react';
import { Grid, Chip, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import maps from '../../assets/maps';
import { WorldContext } from '../root';

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 200,
    backgroundColor: '#ccddff',
  },
  version: {
    fontSize: 14,
  },
  title: {
    marginTop: 4,
    marginBottom: 8,
    fontSize: 22,
  },
  info: {
    fontSize: 14,
    textAlign: 'left',
  },
  description: {
    marginTop: 8,
    textAlign: 'left',
  },
  chip: {
    marginRight: 4,
  },
});

const Map = React.memo((props) => {
  const open = useCallback(() => {
    window.open(props.url);
  }, [props.url]);

  return (
    <Grid item key={`card-${props.index}`}>
      <Chip className={props.styles.chip} label={`バージョン: ${props.version}`} color="primary" />
      {props?.first && <Chip className={props.styles.chip} label={'初心者向け'} color="secondary" />}
      {props?.popular && <Chip className={props.styles.chip} label={'大人気企画'} color="secondary" />}
      {props?.bug && <Chip className={props.styles.chip} label={'バグ多め'} />}
      <Card >
        <CardContent className={props.styles.card} >
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
    dispatch({ type: 'scene', payload: 'maps' });
  }, [dispatch]);

  const MapCard = maps.map((value, index) => <Map {...value} index={index} styles={styles} />);
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" >
      {MapCard}
    </Grid>
  );
};

export default Maps;

import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Grid, Chip, Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { fetchCsv } from '../../utils/csv';
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

  const version = props.min?.length > 0 ? `${props.min} ～ ${props.version}` : props.version;

  return (
    <Grid item>
      <Chip className={props.styles.chip} label={`バージョン: ${version}`} color="primary" />
      {props?.first === '1' && <Chip className={props.styles.chip} label={'初心者向け'} color="secondary" />}
      {props?.popular === '1' && <Chip className={props.styles.chip} label={'大人気企画'} color="secondary" />}
      {props?.bug === '1' && <Chip className={props.styles.chip} label={'バグ多め'} />}
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
  const [maps, SetMaps] = useState([]);

  useEffect(() => {
    dispatch({ type: 'scene', payload: 'maps' });

    const fetchData = (async () => {
      const data = await fetchCsv('world/assets/maps.csv');
      SetMaps(data);
    });
    fetchData();
  }, [dispatch]);

  const MapCard = maps.map((value, index) => <Map {...value} key={`map${index}`} styles={styles} />);
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" >
      {MapCard}
    </Grid>
  );
};

export default Maps;

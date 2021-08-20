import React, { useContext, useEffect, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { fetchCsv } from '../../../utils/csv';
import { WorldContext } from '../../root';

const useStyles = makeStyles({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    margin: 16,
  },
});

const convertMcFunctionText = (data, version) => {
  const textData = data
    .filter(item => parseFloat(item.version) <= version)
    .map(item => {
      const title = `## ${item.desc}`;
      const note = (() => {
        if (item.note2) return `# ${item.note1}\n # ${item.note2}`;
        if (item.note1) return `# ${item.note1}`;
        return null;
      })();
      const def = `# 初期値: ${item.default}`;
      const code = `gamerule ${item.key} ${item.default}`;

      if (note) {
        return `${title}\n${note}\n${def}\n${code}`;
      }
      return `${title}\n${def}\n${code}`;
    });

  return `## ルール一括設定\n\n${textData.join(`\n\n`)}`;
};

const RuleTool = () => {
  const style = useStyles();
  const [version, SetVersion] = useState(1.17);
  const [value, SetValue] = useState('');
  const { dispatch } = useContext(WorldContext);

  useEffect(() => {
    dispatch({ type: 'scene', payload: 'rule' });
  }, [dispatch]);

  useEffect(() => {
    const fetchData = (async () => {
      const data = await fetchCsv('/world/assets/rules.csv');
      SetValue(convertMcFunctionText(data, version));
    });
    fetchData();
  }, [version]);

  return (
    <>
      <CopyToClipboard text={value}>
        <Button variant="contained">コピー</Button>
      </CopyToClipboard>
      <TextField
        className={style.field}
        label="rules.mcfunction"
        variant="outlined"
        value={value}
        InputProps={{ readOnly: true }}
        multiline
        fullWidth
      />
    </>
  )
};

export default RuleTool;

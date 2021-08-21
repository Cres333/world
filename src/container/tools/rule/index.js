import React, { useContext, useEffect, useState } from 'react';
import { FormControl, Select, MenuItem, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { fetchCsv } from '../../../utils/csv';
import { WorldContext } from '../../root';

const useStyles = makeStyles((theme) => ({
  top: {
    flexDirection: 'row',
  },
  form: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  field: {
    margin: 16,
  },
}));

const convertMcFunctionText = (data, version, preset) => {
  const textData = data
    .filter(item => parseFloat(item.version) <= version)
    .map(item => {
      console.log(`${JSON.stringify(item)}`);
      const title = `## ${item.desc}`;
      const note = (() => {
        if (item.note2) return `# ${item.note1}\n # ${item.note2}`;
        if (item.note1) return `# ${item.note1}`;
        return null;
      })();
      const def = `# 初期値: ${item.default}`;
      const code = `gamerule ${item.key} ${item[preset]}`

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
  const [preset, SetPreset] = useState('preset-world');
  const [value, SetValue] = useState('');
  const { dispatch } = useContext(WorldContext);

  useEffect(() => {
    dispatch({ type: 'scene', payload: 'rule' });
  }, [dispatch]);

  useEffect(() => {
    const fetchData = (async () => {
      const data = await fetchCsv('/world/assets/rules.csv');
      SetValue(convertMcFunctionText(data, version, preset));
    });
    fetchData();
  }, [version, preset]);

  return (
    <>
      <div className={style.top}>
        <FormControl className={style.form}>
          <Select value={version} onChange={e => SetVersion(e.target.value)}>
            <MenuItem value={1.12}>ver 1.12</MenuItem>
            <MenuItem value={1.13}>ver 1.13</MenuItem>
            <MenuItem value={1.14}>ver 1.14</MenuItem>
            <MenuItem value={1.15}>ver 1.15</MenuItem>
            <MenuItem value={1.16}>ver 1.16</MenuItem>
            <MenuItem value={1.17}>ver 1.17</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={style.form}>
          <Select value={preset} onChange={e => SetPreset(e.target.value)}>
            <MenuItem value="default">デフォルト</MenuItem>
            <MenuItem value="preset-world">マップ作成用</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={style.form}>
          <CopyToClipboard text={value}>
            <Button variant="contained">コピー</Button>
          </CopyToClipboard>
        </FormControl>
      </div>
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
  );
};

export default RuleTool;

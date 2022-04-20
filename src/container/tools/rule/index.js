import React, { useContext, useEffect, useState } from 'react';
import { FormControl, FormControlLabel, Checkbox, Select, MenuItem, Button, TextField } from '@material-ui/core';
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
  copy: {
    marginLeft: 36,
    minWidth: 120,
  },
  field: {
    margin: 16,
    backgroundColor: '#f5f5f5',
  },
  text: {
    color: '#657b83',
  },
}));

const convertMcFunctionText = (data, version, preset, other) => {
  const textData = data
    .filter(item => parseFloat(item.version) <= version)
    .filter(item => other ? true : item.type === 'gamerule')
    .map(item => {
      console.log(`${JSON.stringify(item)}`);
      const title = `## ${item.desc}`;
      const note = (() => {
        if (item.note2) return `# ${item.note1}\n# ${item.note2}`;
        if (item.note1) return `# ${item.note1}`;
        return null;
      })();
      const def = `# 初期値: ${item.default}`;
      const code = item.type === 'gamerule' ? `gamerule ${item.key} ${item[preset]}` : `# ${item.key} ${item[preset]}`;

      if (note) {
        return `${title}\n${note}\n${def}\n${code}`;
      }
      return `${title}\n${def}\n${code}`;
    });

  return `## ルール一括設定\n\n${textData.join(`\n\n`)}`;
};

const RuleTool = () => {
  const style = useStyles();
  const [data, SetData] = useState([]);
  const [version, SetVersion] = useState(1.18);
  const [preset, SetPreset] = useState('preset-world');
  const [other, SetOther] = useState(true);
  const [value, SetValue] = useState('');
  const { dispatch } = useContext(WorldContext);

  useEffect(() => {
    dispatch({ type: 'scene', payload: 'rule' });

    const fetchData = (async () => {
      const data = await fetchCsv('/world/assets/rules.csv');
      SetData(data);
    });
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    SetValue(convertMcFunctionText(data, version, preset, other));
  }, [data, version, preset, other]);

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
            <MenuItem value={1.18}>ver 1.18</MenuItem>
            <MenuItem value={1.19}>ver 1.19</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={style.form}>
          <Select value={preset} onChange={e => SetPreset(e.target.value)}>
            <MenuItem value="default">デフォルト値</MenuItem>
            <MenuItem value="preset-world">マップ作成用</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={other}
              onChange={(e) => SetOther(e.target.checked)}
            />
          }
          label="gamerule以外も追加"
          labelPlacement="start"
        />
        <FormControl className={style.copy}>
          <CopyToClipboard text={value}>
            <Button variant="contained">コピー</Button>
          </CopyToClipboard>
        </FormControl>
      </div>
      <TextField
        className={style.field}
        variant="outlined"
        value={value}
        InputProps={{ 
          readOnly: true,
          className: style.text,
         }}
        multiline
        fullWidth
      />
    </>
  );
};

export default RuleTool;

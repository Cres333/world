import React, { useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../component/header';
import Footer from '../../component/footer';
import Menu from '../../component/menu';


export const WorldContext = React.createContext();

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    textAlign: 'center',
    paddingTop: 100,
    paddingBottom: 50,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const initialState = {
  menu: false,
  scene: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'menuToggle':
      return { ...state, menu: !state.menu };
    case 'scene':
      return { ...state, scene: action.payload };
    default:
      return state;
  }
};

const Root = ({ children }) => {
  const styles = useStyles();
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <WorldContext.Provider value={{ store, dispatch }}>
      <div className={styles.root}>
        <Header />
        <Menu />
        <div className={styles.container}>
          {children}
        </div>
        <Footer />
      </div>
    </WorldContext.Provider>
  );
}

export default Root;

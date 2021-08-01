import React, { useReducer } from 'react';

import Header from '../../component/header';
import Menu from '../../component/menu';

export const WorldContext = React.createContext();

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
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <WorldContext.Provider value={{ store, dispatch }}>
      <Header />
      <Menu />
      {children}
    </WorldContext.Provider>
  );
}

export default Root;

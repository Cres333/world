import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';

import Root from './container/root';
import Maps from './container/maps';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/world/" component={Root} />
        <Route exact path="/world/maps" component={Maps} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
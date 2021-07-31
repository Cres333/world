import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';

import Root from './container/root';
import Maps from './container/maps';
import Color from './container/color';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/world/" component={Root} />
        <Route exact path="/world/maps" component={Maps} />
        <Route exact path="/world/color" component={Color} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>  
    <div className="App">
      <header className="App-header">
        <App />
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById('app')
);
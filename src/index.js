import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';

import Root from './container/root';
import Top from './container/top';
import Maps from './container/maps';
import Color from './container/color';

const App = () => {
  return (
    <BrowserRouter>
      <Root>
        <Switch>
          <Route exact path="/world/" component={Top} />
          <Route exact path="/world/maps" component={Maps} />
          <Route exact path="/world/color" component={Color} />
        </Switch>
      </Root>
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
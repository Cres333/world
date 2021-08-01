import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';

import Root from './container/root';
import Maps from './container/maps';
import Color from './container/color';

import { PageTable } from './utils/constant';

const App = () => {
  return (
    <BrowserRouter>
      <Root>
        <Switch>
          <Route exact path={PageTable['maps'].path} component={Maps} />
          <Route exact path={PageTable['color'].path} component={Color} />
        </Switch>
      </Root>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>  
    <div className="App">
      <body className="App-body">
        <App />
      </body>
    </div>
  </React.StrictMode>,
  document.getElementById('app')
);
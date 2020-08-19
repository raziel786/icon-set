import React from 'react';
import { ThemeProvider, palette } from 'pk-ui-web';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Router } from 'react-router';

import { createBrowserHistory } from 'history';
import Header from './Pages/Header';
import Icons from './Pages/Icons';
import Loaders from './Pages/Loaders';
import Create from './Pages/Create';
import Details from './Pages/Details';
import Submit from './Pages/Submit';
import Theme from './Pages/Theme';

const history = createBrowserHistory();

const App = () => (
  <ThemeProvider theme={palette.cyan}>
    <>
      <Header history={history} />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Icons} />
          <Route exact path="/loaders" component={Loaders} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/submit" component={Submit} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/theme" component={Theme} />
          <Route exact path="/details/:icon" component={Details} />
        </Switch>
      </Router>
    </>
  </ThemeProvider>
);

export default (App);

import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Seguin1Niveau2 from './Seguin1Niveau2';
import Seguin1Niveau1 from './Seguin1Niveau1';
import BeadsAsNumber from './BeadsAsNumber';

import history from './history';

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={(props) => <App {...props} />} />
          <Route path="/beadsasnumber" render={(props) => <BeadsAsNumber {...props} />} />
          <Route path="/seguin1niveau1" render={(props) => <Seguin1Niveau1 {...props} />} />
          <Route path="/seguin1niveau2" render={(props) => <Seguin1Niveau2 {...props} />} />
        </div>
      </Router>
  );
}

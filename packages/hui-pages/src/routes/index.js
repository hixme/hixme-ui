// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import FormGroupDocs from './FormGroupDocs';
import NotFound from './NotFound';

const Routes = (props) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/form-group" component={FormGroupDocs} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

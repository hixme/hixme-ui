// src/routes.js
import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home';
import FormGroupDocs from './FormGroupDocs';
import TextDocs from './TextDocs';
import TitleDocs from './TitleDocs';
import NotFound from './NotFound';

const Routes = (props) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/form-group" component={FormGroupDocs} />
    <Route path="/text" component={TextDocs} />
    <Route path="/title" component={TitleDocs} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

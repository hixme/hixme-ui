// src/routes.js
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DocsHeader from '../components/DocsHeader/DocsHeader'

import Home from './Home'
import CheckboxDocs from './CheckboxDocs'
import ContainerDocs from './ContainerDocs'
import ContentContainerDocs from './ContentContainerDocs'
import FormGroupDocs from './FormGroupDocs'
import InputDocs from './InputDocs'
import SelectDocs from './SelectDocs'
import SeparatorDocs from './SeparatorDocs'
import TextDocs from './TextDocs'
import TitleDocs from './TitleDocs'
import TableDocs from './TableDocs'
import NotFound from './NotFound'

import ContentContainer from '@hixme-ui/content-container'

const Routes = (props) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <ContentContainer>
      <DocsHeader />
      <Route path="/container" component={ContainerDocs} />
      <Route path="/content-container" component={ContentContainerDocs} />
      <Route path="/checkbox" component={CheckboxDocs} />
      <Route path="/form-group" component={FormGroupDocs} />
      <Route path="/input" component={InputDocs} />
      <Route path="/select" component={SelectDocs} />
      <Route path="/separator" component={SeparatorDocs} />
      <Route path="/table" component={TableDocs} />
      <Route path="/text" component={TextDocs} />
      <Route path="/title" component={TitleDocs} />
    </ContentContainer>
    <Route component={NotFound} />
  </Switch>
)

export default Routes

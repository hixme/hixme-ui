// src/routes.js
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ContentContainer from '@hixme-ui/content-container'

import DocsHeader from '../components/DocsHeader/DocsHeader'

import Home from './Home'
import ButtonDocs from './ButtonDocs'
import AnimateDocs from './AnimateDocs'
import CheckboxDocs from './CheckboxDocs'
import CardDocs from './CardDocs'
import ContainerDocs from './ContainerDocs'
import ContentContainerDocs from './ContentContainerDocs'
import CurrencyDocs from './CurrencyDocs'
import FormGroupDocs from './FormGroupDocs'
import FormsDocs from './FormsDocs'
import LabelDocs from './LabelDocs'
import InputDocs from './InputDocs'
import PercentageDocs from './PercentageDocs'
import PhoneDocs from './PhoneDocs'
import PriceDocs from './PriceDocs'
import SelectDocs from './SelectDocs'
import SeparatorDocs from './SeparatorDocs'
import SocialSecurityDocs from './SocialSecurityDocs'
import TextDocs from './TextDocs'
import TitleDocs from './TitleDocs'
import TableDocs from './TableDocs'
import NotFound from './NotFound'

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path='/' exact component={Home} />
      <ContentContainer>
        <DocsHeader />
        <Route path='/button' component={ButtonDocs} />
        <Route path='/animate' component={AnimateDocs} />
        <Route path='/card' component={CardDocs} />
        <Route path='/container' component={ContainerDocs} />
        <Route path='/content-container' component={ContentContainerDocs} />
        <Route path='/checkbox' component={CheckboxDocs} />
        <Route path='/currency' component={CurrencyDocs} />
        <Route path='/form-group' component={FormGroupDocs} />
        <Route path='/forms' component={FormsDocs} />
        <Route path='/input' component={InputDocs} />
        <Route path='/label' component={LabelDocs} />
        <Route path='/percentage' component={PercentageDocs} />
        <Route path='/phone' component={PhoneDocs} />
        <Route path='/price' component={PriceDocs} />
        <Route path='/select' component={SelectDocs} />
        <Route path='/separator' component={SeparatorDocs} />
        <Route path='/social-security' component={SocialSecurityDocs} />
        <Route path='/table' component={TableDocs} />
        <Route path='/text' component={TextDocs} />
        <Route path='/title' component={TitleDocs} />
      </ContentContainer>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes

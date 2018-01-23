// src/routes.js
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ContentContainer from '@hixme-ui/content-container'

import DocsHeader from '../components/DocsHeader/DocsHeader'

import Home from './Home'

import AnimateDocs from './AnimateDocs'
import BulletListDocs from './BulletListDocs'
import ButtonDocs from './ButtonDocs'
import CardDocs from './CardDocs'
import CardDrawerDocs from './CardDrawerDocs'
import CheckboxDocs from './CheckboxDocs'
import ContainerDocs from './ContainerDocs'
import ContentContainerDocs from './ContentContainerDocs'
import CurrencyDocs from './CurrencyDocs'
import EmailDocs from './EmailDocs'
import FormGroupDocs from './FormGroupDocs'
import FormsDocs from './FormsDocs'
import IconDocs from './IconDocs'
import InputDocs from './InputDocs'
import LabelDocs from './LabelDocs'
import PercentageDocs from './PercentageDocs'
import PhoneDocs from './PhoneDocs'
import PriceDocs from './PriceDocs'
import RadioButtonDocs from './RadioButtonDocs'
import SelectDocs from './SelectDocs'
import SeparatorDocs from './SeparatorDocs'
import SocialSecurityDocs from './SocialSecurityDocs'
import TableDocs from './TableDocs'
import TextDocs from './TextDocs'
import TitleDocs from './TitleDocs'
import NotFound from './NotFound'

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path='/' exact component={Home} />
      <ContentContainer>
        <DocsHeader />
        <Route path='/animate' component={AnimateDocs} />
        <Route path='/bullet-list' component={BulletListDocs} />
        <Route path='/button' component={ButtonDocs} />
        <Route path='/card' component={CardDocs} />
        <Route path='/card-drawer' component={CardDrawerDocs} />
        <Route path='/checkbox' component={CheckboxDocs} />
        <Route path='/container' component={ContainerDocs} />
        <Route path='/content-container' component={ContentContainerDocs} />
        <Route path='/currency' component={CurrencyDocs} />
        <Route path='/email' component={EmailDocs} />
        <Route path='/form-group' component={FormGroupDocs} />
        <Route path='/forms' component={FormsDocs} />
        <Route path='/icon' component={IconDocs} />
        <Route path='/input' component={InputDocs} />
        <Route path='/label' component={LabelDocs} />
        <Route path='/percentage' component={PercentageDocs} />
        <Route path='/phone' component={PhoneDocs} />
        <Route path='/price' component={PriceDocs} />
        <Route path='/radio-button' component={RadioButtonDocs} />
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

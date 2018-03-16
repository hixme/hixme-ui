// src/routes.js
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AppLayout from '@hixme-ui/app-layout'
import ContentContainer from '@hixme-ui/content-container'

import DocsHeader from '../components/DocsHeader/DocsHeader'
import Nav from '../components/Nav'
import MenuHeader from '../components/MenuHeader'

import Home from './Home'

import AnimateDocs from './AnimateDocs'
import BenefitPriceDocs from './BenefitPriceDocs'
import BulletListDocs from './BulletListDocs'
import ButtonDocs from './ButtonDocs'
import CardDocs from './CardDocs'
import CardDrawerDocs from './CardDrawerDocs'
import CheckboxDocs from './CheckboxDocs'
import CloseButtonDocs from './CloseButtonDocs'
import ContainerDocs from './ContainerDocs'
import ContentContainerDocs from './ContentContainerDocs'
import CurrencyDocs from './CurrencyDocs'
import DatesDocs from './DatesDocs'
import EmailDocs from './EmailDocs'
import FormGroupDocs from './FormGroupDocs'
import FormsDocs from './FormsDocs'
import IconDocs from './IconDocs'
import InputDocs from './InputDocs'
import LabelDocs from './LabelDocs'
import ModalDocs from './ModalDocs'
import NotFound from './NotFound'
import PercentageDocs from './PercentageDocs'
import PhoneDocs from './PhoneDocs'
import PriceDocs from './PriceDocs'
import PrintDocs from './PrintDocs'
import RadioButtonDocs from './RadioButtonDocs'
import SelectDocs from './SelectDocs'
import SeparatorDocs from './SeparatorDocs'
import SidebarDocs from './SidebarDocs'
import SocialSecurityDocs from './SocialSecurityDocs'
import SpinnerDocs from './SpinnerDocs'
import StepDocs from './StepDocs'
import TableDocs from './TableDocs'
import TextDocs from './TextDocs'
import TitleDocs from './TitleDocs'
import UploadBoxDocs from './UploadBoxDocs'

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <AppLayout HeaderComponent={MenuHeader} SidebarComponent={Nav} fixed open>
      <ContentContainer>
        <DocsHeader />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/animate' component={AnimateDocs} />
          <Route path='/benefit-price' component={BenefitPriceDocs} />
          <Route path='/bullet-list' component={BulletListDocs} />
          <Route path='/button' component={ButtonDocs} />
          <Route path='/card' component={CardDocs} />
          <Route path='/card-drawer' component={CardDrawerDocs} />
          <Route path='/checkbox' component={CheckboxDocs} />
          <Route path='/close-button' component={CloseButtonDocs} />
          <Route path='/container' component={ContainerDocs} />
          <Route path='/content-container' component={ContentContainerDocs} />
          <Route path='/currency' component={CurrencyDocs} />
          <Route path='/dates' component={DatesDocs} />
          <Route path='/email' component={EmailDocs} />
          <Route path='/form-group' component={FormGroupDocs} />
          <Route path='/forms' component={FormsDocs} />
          <Route path='/icon' component={IconDocs} />
          <Route path='/input' component={InputDocs} />
          <Route path='/label' component={LabelDocs} />
          <Route path='/modal' component={ModalDocs} />
          <Route path='/percentage' component={PercentageDocs} />
          <Route path='/phone' component={PhoneDocs} />
          <Route path='/price' component={PriceDocs} />
          <Route path='/print' component={PrintDocs} />
          <Route path='/radio-button' component={RadioButtonDocs} />
          <Route path='/select' component={SelectDocs} />
          <Route path='/separator' component={SeparatorDocs} />
          <Route path='/sidebar' component={SidebarDocs} />
          <Route path='/social-security' component={SocialSecurityDocs} />
          <Route path='/spinner' component={SpinnerDocs} />
          <Route path='/step' component={StepDocs} />
          <Route path='/table' component={TableDocs} />
          <Route path='/text' component={TextDocs} />
          <Route path='/title' component={TitleDocs} />
          <Route path='/upload-box' component={UploadBoxDocs} />
          <Route component={NotFound} />
        </Switch>
      </ContentContainer>
    </AppLayout>
  </BrowserRouter>
)

export default Routes

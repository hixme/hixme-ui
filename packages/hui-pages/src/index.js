import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import AppContainer from './containers/AppContainer'
import Routes from './routes'

import 'normalize.css'

ReactDOM.render(
  (<AppContainer>
    <Routes />
  </AppContainer>),
  document.getElementById('root')
)
registerServiceWorker()

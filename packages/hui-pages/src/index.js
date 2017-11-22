import React from 'react'
import ReactDOM from 'react-dom'

import registerServiceWorker from './registerServiceWorker'
import AppContainer from './containers/AppContainer'
import Routes from './routes'

ReactDOM.render(
  (<AppContainer>
    <Routes />
  </AppContainer>),
  document.getElementById('root')
)
registerServiceWorker()

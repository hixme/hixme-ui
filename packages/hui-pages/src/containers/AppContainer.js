import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom'

const AppContainer = ({
  children
}) => (
  <BrowserRouter>
    <div style={{ height: '100%' }}>
      {children}
    </div>
   </BrowserRouter>
)

AppContainer.propTypes = {
  children: PropTypes.object.isRequired,
}

export default AppContainer

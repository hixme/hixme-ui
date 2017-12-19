import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the HUI</h1>
        </header>
        <div>
          <Row center='xs' style={{ padding: '20px' }}>
            <Col xs={12}>
              <Link to='/checkbox'>Checkbox</Link>
            </Col>
            <Col xs={12}>
              <Link to='/content-container'>ContentContainer</Link>
            </Col>
            <Col xs={12}>
              <Link to='/form-group'>Form Group</Link>
            </Col>
            <Col xs={12}>
              <Link to='/input'>Input</Link>
            </Col>
            <Col xs={12}>
              <Link to='/select'>Select</Link>
            </Col>
            <Col xs={12}>
              <Link to='/separator'>Separator</Link>
            </Col>
            <Col xs={12}>
              <Link to='/text'>Text</Link>
            </Col>
            <Col xs={12}>
              <Link to='/title'>Title</Link>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App

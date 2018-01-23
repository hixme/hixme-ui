import React, { Component } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to the HUI</h1>
        </header>
        <div>
          <Row center='xs' style={{ width: '100%', padding: '20px' }}>
            <Col xs={12}>
              <Link to='/animate'>Animate</Link>
            </Col>
            <Col xs={12}>
              <Link to='/bullet-list'>BulletList</Link>
            </Col>
            <Col xs={12}>
              <Link to='/button'>Button</Link>
            </Col>
            <Col xs={12}>
              <Link to='/checkbox'>Checkbox</Link>
            </Col>
            <Col xs={12}>
              <Link to='/card'>Card</Link>
            </Col>
            <Col xs={12}>
              <Link to='/card-drawer'>CardDrawer</Link>
            </Col>
            <Col xs={12}>
              <Link to='/close-button'>Close Button</Link>
            </Col>
            <Col xs={12}>
              <Link to='/container'>Container</Link>
            </Col>
            <Col xs={12}>
              <Link to='/content-container'>ContentContainer</Link>
            </Col>
            <Col xs={12}>
              <Link to='/currency'>Currency</Link>
            </Col>
            <Col xs={12}>
              <Link to='/email'>Email</Link>
            </Col>
            <Col xs={12}>
              <Link to='/form-group'>Form Group</Link>
            </Col>
            <Col xs={12}>
              <Link to='/forms'>Form Components</Link>
            </Col>
            <Col xs={12}>
              <Link to='/icon'>Icon</Link>
            </Col>
            <Col xs={12}>
              <Link to='/input'>Input</Link>
            </Col>
            <Col xs={12}>
              <Link to='/label'>Label</Link>
            </Col>
            <Col xs={12}>
              <Link to='/percentage'>Percentage</Link>
            </Col>
            <Col xs={12}>
              <Link to='/phone'>Phone</Link>
            </Col>
            <Col xs={12}>
              <Link to='/price'>Price</Link>
            </Col>
            <Col xs={12}>
              <Link to='/radio-button'>Radio Button</Link>
            </Col>
            <Col xs={12}>
              <Link to='/select'>Select</Link>
            </Col>
            <Col xs={12}>
              <Link to='/separator'>Separator</Link>
            </Col>
            <Col xs={12}>
              <Link to='/social-security'>Social Security</Link>
            </Col>
            <Col xs={12}>
              <Link to='/table'>Table</Link>
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

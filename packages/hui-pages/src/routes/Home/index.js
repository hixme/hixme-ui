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
          <Row>
            <Col xs={12} sm={3} md={2} lg={1}>
              <Link to='/form-group'>Form Group</Link>
              <br />
              <Link to='/text'>Text</Link>
              <br />
              <Link to='/title'>Title</Link>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App

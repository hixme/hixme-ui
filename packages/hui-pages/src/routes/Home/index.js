import React, { Component } from 'react'

import Nav from '../../components/Nav'

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
        <div style={{ padding: '25px' }}>
          <Nav />
        </div>
      </div>
    )
  }
}

export default App

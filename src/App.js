import React, { Component } from 'react';
import './App.css';


import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to   Royal</h1>
          <ul className="nav">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>

          </ul>
        </header>
        
      </div>
    );
  }
}

export default App;

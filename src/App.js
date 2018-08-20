import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to  React Router v4</h1>
          <ul className="nav">
            <Link to="/" className="link">Home</Link>
            <Link to="/about" className="link">About Us</Link>
            <Link to="/contact" className="link">Contact</Link>

          </ul>
        </header>
        
      </div>
    );
  }
}

export default App;

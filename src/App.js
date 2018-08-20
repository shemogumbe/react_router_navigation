import React, { Component } from 'react';
import './App.css';

import { NavLink } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to  React Router v4</h1>
          <ul className="nav">
            <NavLink to="/" activeClassName="is-active" className="link">Home</NavLink>
            <NavLink to="/about" activeClassName="is-active" className="link">About Us</NavLink>
            <NavLink to="/contact" activeClassName="is-active" className="link">Contact</NavLink>

          </ul>
        </header>
        
      </div>
    );
  }
}

export default App;

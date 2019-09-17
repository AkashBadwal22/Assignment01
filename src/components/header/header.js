import React from 'react';
import logo from '../../../src/logo.svg';
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
  return ( 
    <header className="header d-flex">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="logo"><img src={logo} className="App-logo" alt="logo" /></div>
          </div>
          <div className="col-8 navbar navbar-expand-lg justify-content-end">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>)
  }
}

export default Header;
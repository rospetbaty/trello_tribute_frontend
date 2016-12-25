import React, { Component } from 'react';
import Mlg_Doge from '../images/Mlg_Doge.png';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={Mlg_Doge} className="App-logo" alt="logo" />
          <div>
            <a className="logbuttons" href= "login">Log In </a>
            <a className="regbuttons" href= "login">Register</a>
          </div>


export default Header

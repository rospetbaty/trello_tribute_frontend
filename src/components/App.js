import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Mlg_Doge from '../images/Mlg_Doge.png';

class App extends Component {
  render() {
    return (
      //header
    /*  <div className="App">
        <div className="App-header">
          <img src={Mlg_Doge} className="App-logo" alt="logo" />
          <div>
            <a className="logbuttons" href= "login">Log In </a>
            <a className="regbuttons" href= "login">Register</a>
          </div>*/
        <div>
          <Header />



        <div>
        <img src={Mlg_Doge} className="logostyle"></img>
        <h2 className="title">Trello Tribute</h2>
        </div>

        <div>
        <p className="App-intro">
          This is a project similiar to trello.
          In other words this is a project management tool that will help you
          to track and optimize your personal projects.
        </p>
        <p className="App-intro">
          We hope that you will enjoy using our tool.
          For any feedback or any other questions, feel free
          to mail us at <a href= "mailto:example@gmail.com">example@gmail.com</a>.
        </p>
        </div>
        <div className="App-footer">
          <div>
            <ul className="footerelement">
              <li><a  href= "Team">Meet the team</a></li>
              <li><a  href= "Stack">App Stack</a></li>
            </ul>
            <p> © Clopyright 2016, Trello_Tribute, boom shakalaka. </p>
          </div>
        </div>
      </div>

    );
  }
}

export default App;

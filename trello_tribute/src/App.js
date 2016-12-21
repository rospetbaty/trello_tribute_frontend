import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
        <h2 className ="title">Trello Tribute</h2>
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
          heyhey
        </div>
      </div>

    );
  }
}

export default App;

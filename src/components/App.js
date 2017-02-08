import React, { Component } from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Footer from './Footer';
import Mlg_Doge from '../images/Mlg_Doge.png';

class App extends Component {
  render() {
    return (

        <div className="App">
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
              <Footer />
          </div>
          </div>
          </div>

    );
  }
}

export default App;

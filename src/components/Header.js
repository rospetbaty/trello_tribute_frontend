import React, { Component } from 'react';
import Mlg_Doge from '../images/Mlg_Doge.png';
import '../stylesheets/App.scss';

class Header extends Component {

//  constructor() {
//    super();
//    this.state = {
//      authenticated: false
//    }
//    this.login = this.login.bind(this);
//    this.logout = this.logout.bind(this);
//  }
//
//  login() {
//
//    this.props.lock.show((err, profile, token) => {
//      if (err) {
//        alert(err);
//        return;
//      }
//      this.setState({authenticated: true});
//    });
//  }
//
//  logout() {
//    // AuthActions.logUserOut();
//    this.setState({authenticated: false});
//  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={Mlg_Doge} className="App-logo" alt="logo" />
          <div>
            <a className="logbuttons" href= "http://localhost:3000/contact/">Log In </a>
            <a className="regbuttons" href= "http://localhost:3000/contact/">Register</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header

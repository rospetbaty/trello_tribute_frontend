import React from 'react';
import { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
//import Lock from './components/Lock';

class Root extends Component {

  // We need to provide a list of routes
  // for our app, and in this case we are
  // doing so from a Root component
  render() {
    return (
      <Router history={ browserHistory }>  
        <Route path='/' component={App}>
        </Route>
      </Router>
    );
  }
}

export default Root;

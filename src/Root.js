import React from 'react';
import { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Index from './index';
import Login from './Login';


import App from './components/App';

class Root extends Component {

  // We need to provide a list of routes
  // for our app, and in this case we are
  // doing so from a Root component
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={App}>

          //<IndexRoute component={Index}/>
          <Route path='/contact/' component={Login} />

        </Route>
      </Router>
    );
  }
}

export default Root;

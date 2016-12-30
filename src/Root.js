import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './index.js';
import ContactDetail from './components/ContactDetail';

import App from './src/components/App.js';

class Root extends Component {

  // We need to provide a list of routes
  // for our app, and in this case we are
  // doing so from a Root component
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Index}/>
          <Route path='/contact/:id' component={ContactDetail} />
        </Route>
      </Router>
    );
  }
}

export default Root;
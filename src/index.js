import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './components/index.css';
import { browserHistory } from 'react-router';
import Root from './Root.js'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

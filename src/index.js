import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.scss';
import { browserHistory } from 'react-router';
import Root from './Root.js'

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

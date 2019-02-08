import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './views/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// For PWA, change unregister() to register() below.
serviceWorker.unregister();

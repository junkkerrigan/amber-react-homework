import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';

import './include/bootstrap';

import '../node_modules/font-awesome/css/font-awesome.css'

import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

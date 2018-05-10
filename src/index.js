import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/';
import registerServiceWorker from './registerServiceWorker';

// load styles
import 'normalize.css';
import './index.css';


// render react page
ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();

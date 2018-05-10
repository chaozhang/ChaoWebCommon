import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/';
import registerServiceWorker from './registerServiceWorker';
import appCss from './index.css';


ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();

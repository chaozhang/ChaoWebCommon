import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/';
import registerServiceWorker from './registerServiceWorker';
import baseCss from './css/base.css';
import appCss from './css/app.css';


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

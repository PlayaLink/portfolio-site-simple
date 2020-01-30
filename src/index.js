import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheets/base.scss';
import TagManager from 'react-gtm-module';
import LogRocket from 'logrocket';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

LogRocket.init('z5pe1u/portfolio-site');


const tagManagerArgs = {
  gtmId: 'GTM-W35SLR2'
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

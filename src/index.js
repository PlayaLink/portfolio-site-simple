import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheets/base.scss';
import TagManager from 'react-gtm-module';
import LogRocket from 'logrocket';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'react-tippy/dist/tippy.css'
import ReactHeap from "reactjs-heap";


if(window.location.hostname !== "localhost") {
  LogRocket.init('z5pe1u/portfolio-site');
  ReactHeap.initialize("3584085666")
} else {
  ReactHeap.initialize("320729987")
}


const tagManagerArgs = {
  gtmId: 'GTM-W35SLR2'
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, { Component } from 'react';
import './App.scss';
import Timeline from './components/Timeline';
import Home from './components/Home';
import PieChart from './components/PieChart';
import { BrowserRouter, Route } from 'react-router-dom';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown);


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              component={Home}/>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/timeline'}
              component={Timeline} />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/pie-chart'}
              component={PieChart} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.scss';
import Timeline from './components/Timeline';
import Home from './components/Home';
import PieChart from './components/PieChart';
import PopinLive from './components/PopinLive';
import IepGoalTracker from './components/IepGoalTracker';
import { BrowserRouter, Route } from 'react-router-dom';

//Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowRight);
library.add(faChevronDown);
library.add(faInfoCircle);


class App extends Component {

  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/'}
              component={Home}/>
            <Route
              exact
              path={process.env.PUBLIC_URL + '/popin-live'}
              component={PopinLive} />
            <Route
              exact
              path={process.env.PUBLIC_URL + '/iep-goal-tracker'}
              component={IepGoalTracker} />
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

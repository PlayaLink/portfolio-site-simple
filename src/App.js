import React, { Component } from 'react';
import './App.css';
import Timeline from './components/Timeline';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';


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
              path={process.env.PUBLIC_URL + '/timeline'}
              component={Timeline} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

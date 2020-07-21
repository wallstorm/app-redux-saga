import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/home';
import Results from './pages/results';
import MovieDetail from './pages/movieDetail';

import './App.css';

const App = ({ store }) => (
  <Provider store={store} >
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/results" component={Results} />
        <Route path="/movie/:id" component={MovieDetail} />
      </div>
    </Router>
  </Provider>
);

App.prototype = {
  store: PropTypes.object.isRequired
};

export default App;

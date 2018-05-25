import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../scenes/Home';

const App = ({ store }) => (
  <div>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </Provider>
  </div>
);

App.propTypes = {
  store: PropTypes.shape().isRequired,
};

export default App;

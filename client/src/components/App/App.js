import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import rootReducer from '../../reducers';

import Home from '../../screens/Home';

const store = createStore(rootReducer);

const App = () => (
  <div>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </Provider>
  </div>
);

export default App;

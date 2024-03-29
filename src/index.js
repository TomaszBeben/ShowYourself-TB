import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import reducers from './reducers'

import './style/index.scss'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
          <App />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

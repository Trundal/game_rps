import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import gameReducer from './store/reducers/game';
import './index.css';
import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(gameReducer, composeEnhancers(
  applyMiddleware()
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render( app, document.getElementById('root') );

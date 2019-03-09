import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducer from './store/reducers/app';
import gameReducer from './store/reducers/game';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
  app: appReducer,
  game: gameReducer
})

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware()
));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render( app, document.getElementById('root') );
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CombineReducers from './reducers/CombineReducers';
import createLogger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist'

const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(CombineReducers, undefined, composeEnhancers(
  applyMiddleware(thunkMiddleware, logger),
  autoRehydrate()
));

persistStore(store);

//store.dispatch();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
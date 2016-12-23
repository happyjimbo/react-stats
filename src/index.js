import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware/*, compose*/ } from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import helloWorldApp from './reducers/helloWorldApp';
import createLogger from 'redux-logger';


//import logger from 'redux-logger';

//const winstonLogger = new (winston.Logger)();
const logger = createLogger();
const store = createStore(helloWorldApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
	applyMiddleware(thunkMiddleware, logger)
);
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(helloWorldApp, composeEnhancers(applyMiddleware(logger)) );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
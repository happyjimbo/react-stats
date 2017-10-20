import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import CombineReducers from './shared/reducers/CombineReducers'
import * as AppSaga from './app/saga/AppSaga'
import * as StatsSaga from './stats/sagas/StatsSaga'
import {persistStore, autoRehydrate} from 'redux-persist'
import {INITAL_LOAD} from './app/consts/AppConsts'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Router, Route, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import AppContainer from "./app/containers/AppContainer";

const logger = createLogger()
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(CombineReducers, undefined, composeEnhancers(
	applyMiddleware(sagaMiddleware, logger),
	autoRehydrate()
))

const loadStoredStats = () => {	
	sagaMiddleware.run(AppSaga.init)
	sagaMiddleware.run(StatsSaga.init)
	store.dispatch({ type:INITAL_LOAD })
}

persistStore(store, {blacklist: ['routing']}, loadStoredStats)
//persistStore(store).purge()

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
	<Provider store={store}>
		 <Router history={history}>
			<div>
			  <Route path="/" component={AppContainer} >
				  <Route path="*" component={AppContainer} />
			  </Route>
			  </div>
		</Router>
	</Provider>,
	document.getElementById('root')
)
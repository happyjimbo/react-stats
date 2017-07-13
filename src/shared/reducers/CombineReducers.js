import { combineReducers } from 'redux'
import { statReceivedReducer } from './../../stats/reducer/StatsReducer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({ 
    statReceivedReducer,
    routing: routerReducer   
})
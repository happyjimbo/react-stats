import { combineReducers } from 'redux'
import { statReceivedReducer } from './../../stats/reducer/StatsReducer'
import { routerReducer } from 'react-router-redux'
import { appReducer } from '../../app/reducer/AppReducer'

export default combineReducers({ 
    statReceivedReducer,
    appReducer,
    routing: routerReducer
})
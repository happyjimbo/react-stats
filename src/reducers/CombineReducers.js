import { combineReducers } from 'redux';
import { dialogPopUpReducer } from './DialogPopUpReducer';
import { statReceivedReducer } from './StatsReducers';

export default combineReducers({
    dialogPopUpReducer,
    statReceivedReducer    
});
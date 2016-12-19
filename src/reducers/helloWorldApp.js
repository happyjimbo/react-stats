import { combineReducers } from 'redux';
import { dialogPopUpReducer } from './DialogPopUpReducer';
import { selectedStat } from './StatsReducers';

export default combineReducers({
    dialogPopUpReducer,
    selectedStat    
});
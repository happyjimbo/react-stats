import { SELECT_STAT, REQUEST_STAT, RECEIVE_STAT, RECEIVE_STAT_FAIL } from "../actions/StatsAction";

export const statReceivedReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_STAT:
            return Object.assign({}, state, {
                data: state.data    
            });
        default:
            return state;
    }
}

// TODO: Remove this comment
// http://finance.google.com/finance/info?client=ig&q=FTSE:LLOY
// The above link works, though it is technically deprecated
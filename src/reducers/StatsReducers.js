import { RECEIVE_STAT, RECEIVE_STAT_FAIL } from "../actions/StatsAction";

const initalState = {
    lastTradePriceOnly : ""
}

export const statReceivedReducer = (state = initalState, action) => {

    let lastTradePriceOnly = "";
    if (action.data !== undefined)
    {
        lastTradePriceOnly = action.data.query.results.quote.LastTradePriceOnly;
    }

    // For the StatListItemContainer we should keep an object on this state,
    // which we then update to have the new stats that have been pulled from
    // the server.

    switch(action.type) {
        case RECEIVE_STAT:        
            return Object.assign({}, state, {
                 lastTradePriceOnly: 
                 lastTradePriceOnly, error: undefined 
                });
        case RECEIVE_STAT_FAIL:
            return Object.assign({}, state, {
                 error: action.message, 
                 lastTradePriceOnly: undefined
                });
        default:
            return state;
    }
}
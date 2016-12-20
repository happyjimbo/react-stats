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

    switch(action.type) {
        case RECEIVE_STAT:        
            return Object.assign({}, state, { lastTradePriceOnly: lastTradePriceOnly, error: undefined });
        case RECEIVE_STAT_FAIL:
            return Object.assign({}, state, { error: action.message, lastTradePriceOnly: undefined });
        default:
            return state;
    }
}
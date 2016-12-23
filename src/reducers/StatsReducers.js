import { RECEIVE_STAT, RECEIVE_STAT_FAIL } from "../actions/StatsAction";

const initalState = {
    lastTradePriceOnly : "",
    stats: {},
    statsOrder: [],
    error: undefined
}

const getStatsOrder = (state, key) => {

   let statsOrder = [];
    if (state.statsOrder !== undefined) {
         statsOrder = Array.from(state.statsOrder);
    }

    let notInArray = statsOrder.find(e => e === key) == undefined;
    if (notInArray) {
        statsOrder.push(key); 
    }
    
    return statsOrder;
}

const getStats = (state, keys, action) => {

    if (action.data !== undefined) {
        return Object.assign({}, state.stats, {
            [keys]: action.data
        });
    }

    return state;    
}

const getLastTradePrice = (state, action) => {
    
    let lastTradePriceOnly = state.lastTradePriceOnly;
    if (action.data !== undefined) {
        
        let priceFromData = action.data.query.results.quote.LastTradePriceOnly;
        if (priceFromData !== undefined) {
            lastTradePriceOnly = action.data.query.results.quote.LastTradePriceOnly;
        }
    }
    return lastTradePriceOnly;
}

export const statReceivedReducer = (state = initalState, action) => {

    let lastTradePriceOnly = getLastTradePrice(state, action);

    let key = String(action.stat);    
    let statsOrder = getStatsOrder(state, key);
    let stats = getStats(state, key, action);
    
    switch(action.type) {
        case RECEIVE_STAT:        
            return Object.assign({}, state, {
                key,
                stats,
                statsOrder,
                lastTradePriceOnly: lastTradePriceOnly, 
                error: undefined
            });
        case RECEIVE_STAT_FAIL:
            return Object.assign({}, state, {
                key,
                stats,
                statsOrder,
                error: action.message, 
                lastTradePriceOnly: undefined
            });
        default:
            return state;
    }
}
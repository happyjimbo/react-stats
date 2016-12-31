import {RECEIVE_STAT, RECEIVE_STAT_FAIL} from '../consts/StatsConsts';

const initalState = {
    lastTradePriceOnly : "",
    stats: {},
    statsOrder: [],
    error: undefined
}

export const statReceivedReducer = (state = initalState, action) => {
    
    switch(action.type) {
        case RECEIVE_STAT:        
            return receiveStat(state, action);
        case RECEIVE_STAT_FAIL:
            return receiveStatFail(state, action);
        default:
            return state;
    }
}

function receiveStat (state, action) {

    let lastTradePriceOnly = getLastTradePrice(state, action);
    let key = String(action.stat);    
    let statsOrder = getStatsOrder(state, key);
    let stats = getStats(state, key, action);

    return Object.assign({}, state, {
        stats,
        statsOrder,
        lastTradePriceOnly, 
        error: undefined
    }); 
}

function receiveStatFail (state, action) {

    let statsOrder = state.statsOrder;
    let stats = state.stats;

    return Object.assign({}, state, {
        stats,
        statsOrder,
        error: action.message, 
        lastTradePriceOnly: undefined
    });
}

function getStatsOrder (state, key) {

   let statsOrder = [];
    if (state.statsOrder !== undefined) {
         statsOrder = Array.from(state.statsOrder);
    }

    let notInArray = statsOrder.find(e => e === key) === undefined;
    if (notInArray) {
        statsOrder.push(key); 
    }
    
    return statsOrder;
}

function getStats (state, keys, action) {

    if (action.data !== undefined) {
        return Object.assign({}, state.stats, {
            [keys]: action.data
        });
    }

    return state;    
}

function getLastTradePrice (state, action) {
    
    let lastTradePriceOnly = state.lastTradePriceOnly;
    if (action.data !== undefined) {
        
        let priceFromData = action.data.query.results.quote.LastTradePriceOnly;
        if (priceFromData !== undefined) {
            lastTradePriceOnly = action.data.query.results.quote.LastTradePriceOnly;
        }
    }
    return lastTradePriceOnly;
}

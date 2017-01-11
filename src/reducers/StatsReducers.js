import {RECEIVE_STAT, RECEIVE_STAT_FAIL} from '../types/StatsTypes';

// export for testing
export const initalState = {
    lastTradePriceOnly : {},
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
    
    let key = String(action.stat);    
    let prices = getPrices(state, key, action);
    let statsOrder = getStatsOrder(state, key);
    let stats = getStats(state, key, action);

    return Object.assign({}, state, {
        stats,
        statsOrder,
        prices, 
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

function getStats (state, key, action) {

    if (action.data !== undefined) {
        return Object.assign({}, state.stats, {
            [key]: action.data
        });
    }

    return state;    
}

function getPrices (state, key, action) {
    
    let prices = state.prices;
    if (action.data !== undefined) {
        
        let priceFromData = action.data.query.results.quote.LastTradePriceOnly;
        if (priceFromData !== undefined) {

            return Object.assign({}, state.prices, {
                [key]: priceFromData
            });
        }
    }
    return prices;
}

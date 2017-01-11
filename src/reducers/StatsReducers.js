import {RECEIVE_STAT, RECEIVE_STAT_FAIL, DISPLAY_DETAILED_STAT} from '../types/StatsTypes';

// export for testing
export const initalState = {
    lastTradePriceOnly : {},
    stats: {},
    statsOrder: [],
    displayDetailedStat: {},
    error: undefined
}

export const statReceivedReducer = (state = initalState, action) => {
    
    switch(action.type) {
        case DISPLAY_DETAILED_STAT:
            return displayDetailedStat(state, action);
        case RECEIVE_STAT:        
            return receiveStat(state, action);
        case RECEIVE_STAT_FAIL:
            return receiveStatFail(state, action);
        default:
            return state;
    }
}

function displayDetailedStat(state, action) {
    let key = String(action.stat);

    let displayDetailedStat = state.displayDetailedStat;
    displayDetailedStat[key] = !displayDetailedStat[key];

    return Object.assign({}, state, {
        displayDetailedStat
    })
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
    return Object.assign({}, state, {
        error: action.message, 
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

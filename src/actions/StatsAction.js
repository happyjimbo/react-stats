import fetch from 'isomorphic-fetch'

export const SELECT_STAT = "SELECT_STAT";


// export function selectStat(stat) {

//     dispatch(fetchStat(stat));

//     return {
//         type: SELECT_STAT,
//         stat
//     };
// } 

export const REQUEST_STAT = "REQUEST_STAT";

export function requestStat(stat) {
    return {
        type: REQUEST_STAT,
        stat
    };
} 

// Get the stat

export function fetchStat(stat) {
    return (dispatch) => {
        console.log("fetchStat " + stat);

        let statUrl = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22${stat}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;

        return fetch(statUrl)
        .then(response => response.json())
        .then(json => dispatch(receieveStat(stat, json)));
    };
}

// Received the stat

export const RECEIVE_STAT = "RECEIVE_STAT";

export function receieveStat(stat, data) {

    console.log("receieveStat " + data);
    console.log("LastTradePriceOnly " + data.query.results.quote.LastTradePriceOnly);

    return {
        type: RECEIVE_STAT,
        stat,
        data: data,//json.data.children.map(child => child.data), // double check this is right for our data
        receivedAt: Date.now()
    }
}

export const RECEIVE_STAT_FAIL = "RECEIVE_STAT_FAIL";

export function receieveStatFail(stat, message) {
    return {
        type: RECEIVE_STAT_FAIL,
        stat,
        message: message,
        receivedAt: Date.now()
    }
}
import fetch from 'isomorphic-fetch'

// Get the stat

export function fetchStat(stat) {
    return (dispatch) => {

        let statUrl = getStat(stat);

        return fetch(statUrl)
        .then(response => response.json())
        .then(json => dispatch(receieveStat(stat, json)))
        .catch(error => dispatch(receieveStatFail(stat, error.message)));
    };
}

// Received the stat

export const RECEIVE_STAT = "RECEIVE_STAT";

export function receieveStat(stat, data) {
    return {
        type: RECEIVE_STAT,
        stat,
        data,
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

function getStat(property)
{
    return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22${property}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
}

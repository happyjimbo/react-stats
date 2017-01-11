import {RECEIVE_STAT, RECEIVE_STAT_FAIL} from '../types/StatsTypes';
import fetch from 'isomorphic-fetch';


const getStatUrl = (property) => {
    return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22${property}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
}

// export this so that we can access this in the unit tests.
export const failMessage = () => {
    return "Unable to retrieve stat, is it a valid value?";
}

export function fetchListOfStats(stats) {
    return (dispatch) => {
        for (let stat of stats) {
            dispatch(fetchStat(stat));
        }
    }
}

export function fetchStat(stat) {
    return (dispatch) => {
        let statUrl = getStatUrl(stat);

        return fetch(statUrl)
        .then(response => response.json())
        .then(json => dispatch(validateResponse(stat, json)))
        .catch(error => dispatch(receieveStatFail(stat, error.message)));
    };
}

function validateResponse(stat, data) {
    if (data.query !== undefined) {
        let name = data.query.results.quote.Name;
        if (name !== null) {
            return receieveStat(stat, data);
        }
    }

    return receieveStatFail(stat, failMessage);
}

function receieveStat(stat, data) {
    return {
        type: RECEIVE_STAT,
        stat,
        data
    }
}

function receieveStatFail(stat, message) {
    return {
        type: RECEIVE_STAT_FAIL,
        stat,
        message: message
    }
}
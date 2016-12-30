import {RECEIVE_STAT, RECEIVE_STAT_FAIL} from '../consts/StatsConsts';
import fetch from 'isomorphic-fetch';

export function fetchStat(stat) {
    return (dispatch) => {

        let statUrl = getStatUrl(stat);

        return fetch(statUrl)
        .then(response => response.json())
        .then(json => dispatch(validateResponse(stat, json)))
        .catch(error => dispatch(receieveStatFail(stat, error.message)));
    };
}

function validateResponse(stat, data) 
{
    if (data.query !== undefined)
    {
        let quote = data.query.results.quote;
        if (quote !== null)
        {
            return receieveStat(stat, data);
        }
    }

    return receieveStatFail(stat, "Unable to retrieve stat, is it a valid value?");
}

export function receieveStat(stat, data) {
    return {
        type: RECEIVE_STAT,
        stat,
        data,
        receivedAt: Date.now()
    }
}

export function receieveStatFail(stat, message) {
    return {
        type: RECEIVE_STAT_FAIL,
        stat,
        message: message,
        receivedAt: Date.now()
    }
}

function getStatUrl(property)
{
    return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22${property}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
}

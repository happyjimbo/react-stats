import fetch from 'isomorphic-fetch'

const getStatUrl = (symbol, days) => `http://localhost:4000/finance?symbol=${symbol}&days=${days}`

export const fetchStatData = (symbol, days) => {

    const url = getStatUrl(symbol, days)
    
    return fetch(url, {credentials: 'include'})
        .then(response => response.json())
}
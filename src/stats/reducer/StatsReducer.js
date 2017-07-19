import {RECEIVE_STAT, RECEIVE_STAT_FAIL, DISPLAY_DETAILED_STAT} from '../consts/StatsActionTypes'
import {ALL_STAT_TYPES} from '../../app/consts/AppConsts'

// export for testing
export const initialState = {
    statsOrder: [],
    displayDetailedStat: {},
    stats: {},
    statType: "",
    error: undefined
}

export const statReceivedReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ALL_STAT_TYPES:
            return allStatTypes(state, action)
        case DISPLAY_DETAILED_STAT:
            return displayDetailedStat(state, action)
        case RECEIVE_STAT:        
            return receiveStat(state, action)
        case RECEIVE_STAT_FAIL:
            return receiveStatFail(state, action)
        default:
            return state
    }
}

const allStatTypes = (state, action) => {
    const statsOrder = action.json.stats.slice() // copy array

    return Object.assign({}, state, {
        statsOrder
    })
}

const displayDetailedStat = (state, action) => {

    const key = String(action.stat)
    const displayDetailedStat = state.displayDetailedStat
    displayDetailedStat[key] = !displayDetailedStat[key]

    return Object.assign({}, state, {
        displayDetailedStat
    })
}

const receiveStat = (state, action) => {

    const key = String(action.stat)
    const statType = action.statType
    
    const stats = getStatData(state, key, statType, action)
    
    return Object.assign({}, state, {
        statType,
        stats, 
        error: undefined
    })
}

const getStatData = (state, key, statType, action) => {

    if (action.data !== undefined) {

        const data = action.data
        const statData = data.map(stat => stat.close)
                
        return Object.assign({}, state.stats, {
            [key]: statData
        })
    }

    return state
}

const receiveStatFail = (state, action) => {
    return Object.assign({}, state, {
        error: action.message
    })
}
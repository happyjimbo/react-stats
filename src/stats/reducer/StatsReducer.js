import {DISPLAY_DETAILED_STAT, RECEIVE_STAT, RECEIVE_STAT_FAIL, REQUEST_STAT, REMOVE_STAT} from '../consts/StatsActionTypes'
import {ALL_STAT_TYPES} from '../../app/consts/AppConsts'

// export for testing
export const initialState = {
    statsOrder: [],
    displayDetailedStat: {},
    stats: {},
    loading: {},
    statType: "",
    errors: {}
}

export const statReceivedReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ALL_STAT_TYPES:
            return allStatTypes(state, action)
        case DISPLAY_DETAILED_STAT:
            return displayDetailedStat(state, action)
        case REQUEST_STAT:
            return requestStat(state, action)
        case RECEIVE_STAT:        
            return receiveStat(state, action)
        case RECEIVE_STAT_FAIL:
            return receiveStatFail(state, action)
        case REMOVE_STAT:
            return removeStat(state, action)
        default:
            return state
    }
}

const allStatTypes = (state, action) => {
    
    let statState = state

    if (state === initialState) {
        const statsOrder = action.json.stats.slice() // copy array
        statState = Object.assign({}, state, {
            statsOrder
        })
    }

    return statState
}

const displayDetailedStat = (state, action) => {

    const key = String(action.stat)
    const displayDetailedStat = state.displayDetailedStat
    displayDetailedStat[key] = !displayDetailedStat[key]

    return Object.assign({}, state, {
        displayDetailedStat
    })
}

const requestStat = (state, action) => {
    const loading = loadingStat(state, action, true)

    let stats = Object.assign({}, state.stats)
    if (stats[action.stat] == null) {
        stats[action.stat] = []
    }

    return Object.assign({}, state, {
        loading,
        stats
    })
}

const loadingStat = (state, action, display) => {

    const loading = Object.assign({}, state.loading)
    const stat = action.stat
    
    loading[stat] = display

    return loading
}

const receiveStat = (state, action) => {

    const key = String(action.stat)
    const statType = action.statType
    
    const stats = getStatData(state, key, statType, action)
    const loading = loadingStat(state, action, false)

    const errors = Object.assign({}, state.errors, {
        [key]: false
    })
    
    return Object.assign({}, state, {
        statType,
        stats, 
        loading,
        errors
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

    const errors = Object.assign({}, state.errors, {
        [action.stat]: true
    })

    const loading = loadingStat(state, action, true)

    return Object.assign({}, state, {
        errors,
        loading
    })
}

const removeStat = (state, action) => {

    const {stat} = action

    const statsOrder = state.statsOrder.filter(s => s !== stat)

    const stats = Object.assign({}, state.stats)
    delete stats[stat]

    const displayDetailedStat = Object.assign({}, state.displayDetailedStat)
    delete displayDetailedStat[stat]

    return Object.assign({}, state, {
        statsOrder,
        stats,
        displayDetailedStat
    })
}
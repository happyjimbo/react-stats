import {RECEIVE_STAT, RECEIVE_STAT_FAIL, DISPLAY_DETAILED_STAT, REMOVE_STAT, REQUEST_STAT} from '../consts/StatsActionTypes'

export const displayDetailedStats = stat => ({
    type: DISPLAY_DETAILED_STAT,
    stat
})

export const removeStat = stat => ({
    type: REMOVE_STAT,
    stat
})

export const requestStat = stat => ({
    type: REQUEST_STAT,
    stat
})

export const validateResponse = (stat, data) => {
    if (data !== undefined && data[0] !== undefined) {
        return receieveStat(stat, data)
    }
    return receieveStatFail(stat)
}

const receieveStat = (stat, data) => ({
    type: RECEIVE_STAT,
    stat,
    data
})

const receieveStatFail = (stat) => ({
    type: RECEIVE_STAT_FAIL,
    stat
})
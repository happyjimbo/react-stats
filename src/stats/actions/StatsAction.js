import {RECEIVE_STAT, RECEIVE_STAT_FAIL, DISPLAY_DETAILED_STAT} from '../consts/StatsActionTypes'

// export this so that we can access this in the unit tests.
export const failMessage = () => "Unable to retrieve stat, is it a valid value?"

export const displayDetailedStats = stat => ({
    type: DISPLAY_DETAILED_STAT,
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
    stat,
    message: failMessage
})
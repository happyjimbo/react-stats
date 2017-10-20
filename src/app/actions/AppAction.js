import {INDEX, ABOUT, CHANGE_ROUTE} from '../consts/AppConsts'
import {FETCH_STATS} from '../../stats/consts/StatsActionTypes'
import {FETCH_ABOUT} from '../../about/consts/AboutConsts'

export const setRoute = (path) => {
    const route = action()[path]
    return route ? route : action()[INDEX]
}

const action = () => ({
    [INDEX] : {type: FETCH_STATS },
    [ABOUT] : {type: FETCH_ABOUT},
})

export const changeRoute = (route) => ({
    type: CHANGE_ROUTE,
    route
})
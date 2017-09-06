import * as StatTypes from '../../stats/consts/StatTypes'
import {FETCH_STATS} from '../../stats/consts/StatsActionTypes'
import { browserHistory } from 'react-router'

export const index = 'index'
export const pathName = (routing) => stripPath(routing.locationBeforeTransitions.pathname)

export const route = (path) => fetchStats(StatTypes.INDEX)

export const stripPath = (path) => {
    return !path || path === "/" 
            ? index 
                ? path != null && path.charAt(0) === "/" 
                : path.substr(1) 
            : path
}

export const updateUrl = (key) => {
    const path = stripPath(key)
    browserHistory.push("/#/" + path)
}

const fetchStats = (statType) => ({type: FETCH_STATS, statType })
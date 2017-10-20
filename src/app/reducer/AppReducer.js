import {INDEX, ABOUT} from "../consts/AppConsts";
import {FETCH_STATS} from "../../stats/consts/StatsActionTypes";
import {FETCH_ABOUT} from "../../about/consts/AboutConsts";

export const initialState = {
    view: INDEX
}


export const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_STATS:
            return fetchStats(state)

        case FETCH_ABOUT:
            return fetchAbout(state)
    }

    return state
}


const fetchStats = (state) => {
    return {...state, view:INDEX}
}

const fetchAbout = (state) => {
    return {...state, view:ABOUT}
}
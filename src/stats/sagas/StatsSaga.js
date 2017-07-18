import {FETCH_STATS, REQUEST_STAT} from '../consts/StatsActionTypes'
import {call, put, fork, select, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import * as StatTypes from '../consts/StatTypes'
import * as Service from '../service/FinanceStatsService'
import * as StatsAction from '../actions/StatsAction'
import * as AppConsts from '../../app/consts/AppConsts'

export function* init() {    
    yield [
        takeLatest(FETCH_STATS, fetchStats),
        takeLatest(REQUEST_STAT, requestStat)
    ]       
}

// methods below are exported only for testing purposes

export const reducer = state => state.statReceivedReducer

export function* fetchStats(action) {
    while(true) {
        const statsReducer = yield select(reducer)
        const stats = statsReducer.statsOrder

        yield call(fetchAllStatData, stats)
        yield call(delay, AppConsts.REFRESH_DELAY)
    }    
}

export function* fetchAllStatData(stats) {
    
    for (const stat in stats) {
        if(stats.hasOwnProperty(stat)) {
           yield fork(fetchStatData, stats[stat])
        }
    }
}

export function* requestStat(action) {
    yield call(fetchStatData, action.stat)
}

export function* fetchStatData(stat) {
    const statData = yield call(Service.fetchStatData, stat, StatTypes.DAYS)
    const response = yield call(StatsAction.validateResponse, stat, statData)
    yield put(response)
}
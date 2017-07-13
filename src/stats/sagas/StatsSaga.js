import {FETCH_STATS} from '../consts/StatsActionTypes'
import {call, put, fork, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import json from '../../client.json'
import * as StatTypes from '../consts/StatTypes'
import * as Service from '../service/FinanceStatsService'
import * as StatsAction from '../actions/StatsAction'
import * as AppConsts from '../../app/consts/AppConsts'

export function* init() {    
    yield [
        takeLatest(FETCH_STATS, fetchStats),
    ]       
}

// methods below are exported only for testing purposes

export function* fetchStats(action) {
    while(true) {
        const stats = json.stats
        yield call(fetchAllStatData, stats)
        yield call(delay, AppConsts.REFRESH_DELAY)
    }    
}

export function* fetchAllStatData(stats, statType) {    
    for (const stat in stats) {
        yield fork(fetchStatData, stats[stat])
    }
}

export function* fetchStatData(stat) {
    const statData = yield call(Service.fetchStatData, stat, StatTypes.DAYS)
    const response = yield call(StatsAction.validateResponse, stat, statData)
    yield put(response)
}
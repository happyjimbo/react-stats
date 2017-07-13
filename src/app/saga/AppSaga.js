import {call, put, takeEvery, select} from 'redux-saga/effects'
import {INITAL_LOAD, ALL_STAT_TYPES} from '../consts/AppConsts'
import * as StatTypes from '../../stats/consts/StatTypes'
import json from '../../client.json'
import * as AppRouter from '../../app/router/AppRouter'

export function* init() {    
    yield [
        takeEvery(INITAL_LOAD, initalLoad)
    ]           
}

// methods below are exported only for testing purposes.
export function* initalLoad(action) {

    yield put({ type: ALL_STAT_TYPES, json:json })

    const route = yield call(getLocation)
    yield put(route)
}

export function* getLocation() {
    const routing = yield select(state => state.routing)
    const pathname = AppRouter.pathName(routing)
    return yield call(AppRouter.route, pathname)
}
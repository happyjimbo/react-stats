import {call, put, takeEvery, takeLatest, select} from 'redux-saga/effects'
import {INITAL_LOAD, ALL_STAT_TYPES, CHANGE_ROUTE} from '../consts/AppConsts'
import json from '../../client.json'
import * as Service from '../service/AppService'
import {setRoute} from '../actions/AppAction'

export function* init() {    
    yield [
        takeEvery(INITAL_LOAD, initalLoad),
        takeLatest(CHANGE_ROUTE, changeRoute),
    ]           
}

// methods below are exported only for testing purposes.
export function* initalLoad() {

    yield put({ type: ALL_STAT_TYPES, json:json })
    yield call(initalRoute)
}

export const route = state => state.routing

export function* initalRoute() {
    const routing = yield select(route)
    const path = Service.pathName(routing)

    Service.updateUrl(path)
    yield put(setRoute(path))
}

export function* changeRoute(action) {

    const {route} = action

    Service.updateUrl(route)

    yield put(setRoute(route))
}
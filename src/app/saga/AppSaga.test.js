import {ALL_STAT_TYPES} from '../../app/consts/AppConsts'
import {call, put} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import json from '../../client.json'
import * as StatTypes from '../../stats/consts/StatTypes'
import * as Saga from '../saga/AppSaga'

// http://stackoverflow.com/questions/34930735/pros-cons-of-using-redux-saga-with-es6-generators-vs-redux-thunk-with-es7-async/34933395
// https://github.com/redux-saga/redux-saga/issues/351
describe('AppSaga', () => {
    
        it('initalLoad puts ALL_STAT_TYPES and FETCH_STATS with statType REVENUE', () => {

        const mockAction = {}
        const generator = Saga.initalLoad(mockAction)

        const allStatTypes = put({ type: ALL_STAT_TYPES, json:json })
        expect(generator.next().value).toEqual(allStatTypes)

        const location = call(Saga.getLocation)
        expect(generator.next().value).toEqual(location)

        const route = put(location)
        expect(generator.next(location).value).toEqual(route)

        // end of saga
        expect(generator.next().value).toEqual(undefined)
    }) 
})
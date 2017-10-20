import {ALL_STAT_TYPES} from '../../app/consts/AppConsts'
import {call, put, select} from 'redux-saga/effects'
import json from '../../client.json'
import * as Saga from '../saga/AppSaga'
import {setRoute} from '../actions/AppAction'
import {INDEX} from "../consts/AppConsts";
import * as Service from '../service/AppService'

// http://stackoverflow.com/questions/34930735/pros-cons-of-using-redux-saga-with-es6-generators-vs-redux-thunk-with-es7-async/34933395
// https://github.com/redux-saga/redux-saga/issues/351
describe('AppSaga', () => {

    it('initalLoad puts ALL_STAT_TYPES and calls initalRoute', () => {

        const generator = Saga.initalLoad()

        const allStatTypes = put({type: ALL_STAT_TYPES, json: json})
        expect(generator.next().value).toEqual(allStatTypes)

        const initalRoute = call(Saga.initalRoute)
        expect(generator.next().value).toEqual(initalRoute)

    })

    it('initialRoute updates the url and dispatches setRoute', () => {

        const generator = Saga.initalRoute()

        const routing = select(Saga.route)
        expect(generator.next().value).toEqual(routing)


        const pathMock = jest.fn()
        pathMock.mockReturnValue(INDEX)
        Service.pathName = pathMock

        Service.updateUrl = jest.fn()

        const nextStep = generator.next()

        expect(Service.pathName).toBeCalled()
        expect(Service.updateUrl).toBeCalled()

        const dispatchRoute = put(setRoute(INDEX))
        expect(nextStep.value).toEqual(dispatchRoute)
    })
})
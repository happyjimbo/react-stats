import {ALL_STAT_TYPES, FETCH_STATS} from '../consts/StatsActionTypes'
import {call, put, select, fork, takeLatest} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import * as Saga from './StatsSaga'
import * as StatTypes from '../consts/StatTypes'
import * as Service from '../service/FinanceStatsService'
import * as StatsAction from '../actions/StatsAction'
import * as AppConsts from '../../app/consts/AppConsts'

// http://stackoverflow.com/questions/34930735/pros-cons-of-using-redux-saga-with-es6-generators-vs-redux-thunk-with-es7-async/34933395
// https://github.com/redux-saga/redux-saga/issues/351
describe('StatsSaga', () => {

    const statType = StatTypes.REVENUE  
    
    it('fetchStats should get the data, create a delay, then get next fetchStats data', () => {

        const mockAction = {statType}
        const generator = Saga.fetchStats(mockAction)

        const selectReducer = select(Saga.reducer)
        expect(generator.next().value).toEqual(selectReducer)

        const reducer = {statsOrder: ['one', 'two']}
        const fetchAllStatData = call(Saga.fetchAllStatData, reducer.statsOrder)
        expect(generator.next(reducer).value).toEqual(fetchAllStatData)

        const delayCall = call(delay, AppConsts.REFRESH_DELAY)
        expect(generator.next().value).toEqual(delayCall)

        // Loop back around to start of generator again
        expect(generator.next().value).toEqual(selectReducer)
    })

    it ('fetchAllStatData should call a fork to fetchDataData multiple times based on stats length', () => {

        const stats = {
            'hello' : 'world',
            'foo' : 'bar'
        }

        const generator = Saga.fetchAllStatData(stats, statType)

        for (const stat in stats) {
            let fetchStatData = fork(Saga.fetchStatData, stats[stat])
            expect(generator.next().value).toEqual(fetchStatData)    
        }

        // end of saga
        expect(generator.next().value).toEqual(undefined)
    })

    it ('fetchStatData should call Service.fetchStatData, then call StatsAction.validateResponse then put the response', () => {

        const stat = 'hello'

        const generator = Saga.fetchStatData(stat)

        const fetchStatData = call(Service.fetchStatData, stat, StatTypes.DAYS)
        expect(generator.next().value).toEqual(fetchStatData)

        const statData = { 'key':'value' }
        const validate = call (StatsAction.validateResponse, stat, statData)
        expect(generator.next(statData).value).toEqual(validate)

        const response = {type: 'best'}
        const putResponse = put(response)
        expect(generator.next(response).value).toEqual(putResponse)

        // end of saga
        expect(generator.next().value).toEqual(undefined)
    })    

     it ('requestStat should call fetchStatData', () => {

        const stat = 'hello'

        const action = { stat }

        const generator = Saga.requestStat(action)

        const fetchStatData = call(Saga.fetchStatData, stat)
        expect(generator.next().value).toEqual(fetchStatData)
        
    })    
})
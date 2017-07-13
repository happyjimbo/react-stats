import {statReceivedReducer, initialState} from './StatsReducer'
import * as types from '../consts/StatsActionTypes'
import {ALL_STAT_TYPES} from '../../app/consts/AppConsts'
import * as StatTypes from '../consts/StatTypes'

describe("StatsReducer", () => {

    const stat = "monkey"
    const statType = "dollar"
    const data = [{close: 1}, {close: 2}, {close: 3}]

    it("should return inital state", () => {
        const reducer = statReceivedReducer(undefined, {})
        expect(reducer).toEqual(initialState)
    })

    it ("should handle ALL_STAT_TYPES to store our stat types", () => {

        const stats = ['monkey', 'dog']

        const json = {
            stats
        }

        const action = {
            type: ALL_STAT_TYPES,
            json
        }

        const state = {}
        const reducer = statReceivedReducer(state, action)

        const response = { 
            statsOrder: ['monkey', 'dog']
        }

        expect(reducer).toEqual(response)
    })   

    it ("should handle DISPLAY_DETAILED_STAT, setting stat value to true", () => {

        const action = {
            type: types.DISPLAY_DETAILED_STAT,
            stat
        }

        const reducer = statReceivedReducer(initialState, action)

        const response = Object.assign({}, initialState, {
            displayDetailedStat: {
                [stat]: true
            }
        })

        expect(reducer).toEqual(response)
    })
    

    it("should handle RECEIVE_STAT one stat", () => {

        const action = {
            type: types.RECEIVE_STAT,
            stat,
            statType,
            data
        }

        const state = {}
        const reducer = statReceivedReducer(state, action)

        const response = { 
            statType,
            stats: { 
                [stat]: [ 1, 2, 3]
            },
            error: undefined 
        }

        expect(reducer).toEqual(response)
    })

    it("should handle RECEIVE_STAT two stats", () => {

        const oldStat = stat
        const newStat = "dog"
        const statType = "dollar"
                
        const action = {
            type: types.RECEIVE_STAT,
            statType,
            stat: newStat,
            data
        }

        const state = { 
            stats: {
                [oldStat]: [ 4, 5, 6 ]
            },
            statType,
            error: undefined
        }

        const reducer = statReceivedReducer(state, action)
        
        const response =  {         
            stats: {
                [oldStat]: [ 4, 5, 6], 
                [newStat]: [ 1, 2, 3 ]
            },
            statType,
            error: undefined
        }

        expect(reducer).toEqual(response)
    })
    
    it("should handle RECEIVE_STAT_FAIL", () => {

        const message = "fail whale"

        const action = {
            type: types.RECEIVE_STAT_FAIL,
            message
        }

        const reducer = statReceivedReducer(initialState, action)

        const response = Object.assign({}, initialState, {
            error: message, 
        })

        expect(reducer).toEqual(response)
    })
})
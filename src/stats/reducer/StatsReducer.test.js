import {statReceivedReducer, initialState} from './StatsReducer'
import * as types from '../consts/StatsActionTypes'
import {ALL_STAT_TYPES} from '../../app/consts/AppConsts'

describe("StatsReducer", () => {

    const stat = "monkey"
    const statType = "dollar"


    const dataObject = {
        date: 1,
        close: 1
    }

    const data = [dataObject]

    it("should return inital state", () => {
        const reducer = statReceivedReducer(undefined, {})
        expect(reducer).toEqual(initialState)
    })

    it ("ALL_STAT_TYPES should return our stats if inital state is the same as the given state", () => {

        const stats = ['monkey', 'dog']

        const action = {
            type: ALL_STAT_TYPES,
            json: { stats }
        }

        const reducer = statReceivedReducer(initialState, action)

        const response = Object.assign({}, initialState, { 
            statsOrder: stats
        });

        expect(reducer).toEqual(response)
    })   

    it ("ALL_STAT_TYPES should retun the given state if it's not equal to the inital state", () => {

        const state = {
            "hello" : "world"
        }

        const action = {
            type: ALL_STAT_TYPES,
            stats: ['monkey', 'dog']
        }
        
        const reducer = statReceivedReducer(state, action)

        expect(reducer).toEqual(state)
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
                [stat]: [ [dataObject.date, dataObject.close] ]
            },
            errors : {
                [stat]: false 
            },
            loading: { 
                [stat]: false,
            }
        }

        expect(reducer).toEqual(response)
    })

    it("should handle RECEIVE_STAT two stats", () => {

        const oldStat = stat
        const newStat = "dog"
        const statType = "dollar"

        const old = [[2, 2]]
                
        const action = {
            type: types.RECEIVE_STAT,
            statType,
            stat: newStat,
            data
        }

        const state = { 
            stats: {
                [oldStat]: old,
            },
            statType,
            errors : { 
                [oldStat]: false 
            },
            loading: { 
                [oldStat]: false,
            }
        }

        const reducer = statReceivedReducer(state, action)        
        
        const response =  {         
            stats: {
                [oldStat]: old,
                [newStat]: [ [dataObject.date, dataObject.close] ]
            },
            statType,            
            errors : { 
                [oldStat]: false,
                [newStat]: false
            },
            loading: { 
                [oldStat]: false,
                [newStat]: false
            }
        }

        expect(reducer).toEqual(response)
    })
    
    it("should handle RECEIVE_STAT_FAIL", () => {

        const action = {
            type: types.RECEIVE_STAT_FAIL,
            stat
        }

        const reducer = statReceivedReducer(initialState, action)

        const loading = { [stat]: true }
        const errors = { [stat]: true }

        const response = Object.assign({}, initialState, {
            loading,
            errors
        })

        expect(reducer).toEqual(response)
    })

    it ("should remove stats", () => {

        const keep = "keep"

        const stats = {
            [stat]:stat,
            [keep]:keep            
        }

        const statsOrder = [stat, keep]

        const displayDetailedStat = {
            [stat]:stat,
            [keep]:keep        
        }

        const state = Object.assign({}, initialState, {
            stats,
            statsOrder,
            displayDetailedStat
        })

        const action = {
            type: types.REMOVE_STAT,
            stat
        }

        const reducer = statReceivedReducer(state, action)

        const result = Object.assign({}, initialState, {
            stats: { [keep]:keep },
            statsOrder: [keep],
            displayDetailedStat : { [keep]:keep }
        })

        expect(reducer).toEqual(result)
    })
})
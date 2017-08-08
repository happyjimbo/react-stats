import * as types from '../consts/StatsActionTypes'
import {COMBINED} from '../consts/StatTypes'
import * as StatsAction from './StatsAction'


describe('StatsAction', () => {

    const stat = "monkey"

    it ("displayDetailedStats DISPLAY_DETAILED_STAT event triggered", () => {        
                
        const response = StatsAction.displayDetailedStats(stat)

        const expectedAction = {
            type:types.DISPLAY_DETAILED_STAT,            
            stat,
        }

        expect(response).toEqual(expectedAction)
    })

    it ("validateResponse RECEIVE_STAT event triggered", () => {        
        
        const data = [{ name: "test" }]

        const response = StatsAction.validateResponse(stat, data)

        const expectedAction = {
            type:types.RECEIVE_STAT,            
            stat,
            data
        }

        expect(response).toEqual(expectedAction)
    })

     it ("validateResponse RECEIVE_STAT_FAIL event triggered", () => {        
        
        const data = []
        
        const response = StatsAction.validateResponse(stat, data)

        const expectedAction = {
            type:types.RECEIVE_STAT_FAIL,            
            stat
        }

        expect(response).toEqual(expectedAction)
    })
})
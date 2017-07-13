import makeCalculateGraphData from './StatLineGraphSelector'
import {STATS_AMOUNT} from '../consts/StatTypes';

describe("StatLineGraphSelector", () => {

    const stats = {}

    const items = [100, 200, 300, 400, 500, 600, 700, 800, 900]
    const props = {items}

    const selector = makeCalculateGraphData()
    const graphData = selector(stats, props)

    it ("has y values that match the items", () => {

        const values = graphData.values

        for (let i = 0; i < values.length; i++) {        
            const y = values[i].y
            expect(y).toEqual(items[i])
        }        
    })

     it ("has x values that are the correct time", () => {

        const values = graphData.values

        const today = new Date()
        today.setDate(today.getDate() - STATS_AMOUNT)

        for (let i = 0; i < values.length; i++) {     

            today.setDate(today.getDate() + 1)
            const x = values[i].x   

            const date = new Date(x)
            const day = date.getDay()
            
            expect(day).toEqual(today.getDay())
        }        
    })

})
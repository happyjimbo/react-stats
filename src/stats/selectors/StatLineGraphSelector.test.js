import StatLineGraphSelector from './StatLineGraphSelector'
import {arrayTest} from './StatLineGraphSelector'
import {STATS_AMOUNT} from '../consts/StatTypes';

describe("StatLineGraphSelector", () => {

    const stats = {}

    const items = [100, 200, 300, 400, 500, 600, 700, 800, 900]
    const props = {items}

    const selector = StatLineGraphSelector()
    const graphDataSelector = selector(stats, props)

    it ("has y values that match the items", () => {

        const values = graphDataSelector.graphData.values

        for (let i = 0; i < values.length; i++) {        
            const y = values[i].y
            expect(y).toEqual(items[i])
        }        
    })

     it ("has x values that are the correct time", () => {

        const values = graphDataSelector.graphData.values

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

    it ("has layout items", () => {
        expect(graphDataSelector.width).toBeTruthy()
        expect(graphDataSelector.height).toBeTruthy()
        expect(graphDataSelector.margins).toBeTruthy()
        expect(graphDataSelector.maxRange).toBeTruthy()
    })

    it ("has scale items", () => {
        expect(graphDataSelector.xScale).toBeTruthy()
        expect(graphDataSelector.tickValues).toBeTruthy()
        expect(graphDataSelector.tickFormat).toBeTruthy()
    })
})
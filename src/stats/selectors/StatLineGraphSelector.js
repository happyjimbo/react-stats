import {createSelector} from 'reselect'
import {STATS_AMOUNT} from '../consts/StatTypes'
import d3 from 'd3'


const generateGraphData = (items) => {
    let data = []
    const today = new Date()
    today.setDate(today.getDate() - STATS_AMOUNT)

    if (items !== undefined) {
        items.forEach(stat => {
            today.setDate(today.getDate() + 1)
            data.push({
                x: new Date(today),
                y:stat
            })
        })
    }

    return { 
        values: data
    }
}

const layoutData = () => {
    const width = 330
    const height = 250
    const margins = {top: 20, bottom: 20, left: 60, right: 10}
    const maxRange = width - margins.left - margins.right

    return {
        width,
        height,
        margins,
        maxRange
    }
}

// Selector prevents this data from being computed everytime the container
// is notified of a state change and will only recalculate when needed.
const StatLineGraphSelector = () => {

    const getItems = (stats, props) => props.items

    return createSelector( [getItems], (items) => {

        const graphData = generateGraphData(items)
        if (graphData.values.length > 0) {

            const layout = layoutData()
            
            const firstData = graphData.values[0].x
            const lastData = graphData.values[graphData.values.length - 1].x       
                 
            const xScale = d3.time.scale().domain([firstData, lastData]).range([0, layout.maxRange])

            const tickValues = xScale.ticks(d3.time.day, 2)
            const tickFormat = d3.time.format("%m/%d")

            return Object.assign({}, layout, { 
                graphData,
                xScale,
                tickValues,
                tickFormat
            })
        }
        return null
    }) 
}

export default StatLineGraphSelector
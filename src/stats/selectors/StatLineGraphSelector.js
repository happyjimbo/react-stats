import {createSelector} from 'reselect'
import moment from 'moment'

// Selector prevents this data from being computed everytime the container
// is notified of a state change and will only recalculate when needed.
const StatLineGraphSelector = () => {
    const getItems = (stats, props) => props.items
    return createSelector( [getItems], (items) => items ? generateGraphData(items) : {} )
}

const generateGraphData = (items) => {

    const graphData = items.map(stat => ({
        x: stat[0],
        y: stat[1]
    }))

    const tickFormatX = (x) => moment(x).format("DD")
    const tickFormatY = (y) => y
    const xLabel = ""

    const data = {
        graphData,
        tickFormatX,
        tickFormatY,
        xLabel
    }

    const layout = graphLayout()

    return Object.assign({}, data, layout)
}

const graphLayout = () => {
    const width = 330
    const height = 250
    const domainPadding = 10
    const padding = { left: 50, right: 5, bottom :30, top: 10 }

    return {
        width,
        height,
        domainPadding,
        padding
    }
}

export default StatLineGraphSelector
import {connect} from 'react-redux'
import LineGraph from '../../shared/components/LineGraph'
import d3 from 'd3'

const mapMakeToProps = () => {

    const width = 330
    const height = 250
    const top = 20
    const bottom = 20
    const left = 60
    const right = 10
    const margins = {top, bottom, left, right}

    const maxRange = width - left - right
    
    const mapStateToProps = (state, props) => {

        const selector = props.selector()        
        const graphData = selector(state, props)        
        let firstData = 0
        let lastData = 0

        if (graphData.values.length > 0) {
            firstData = graphData.values[0].x
            lastData = graphData.values[graphData.values.length - 1].x
        }

        const xScale = d3.time.scale().domain([firstData, lastData]).range([0, maxRange])

        const tickValues = xScale.ticks(d3.time.day, 2)
        const tickFormat = d3.time.format("%m/%d")

        return {
            width,
            height,
            margins,
            graphData,  
            xScale,
            tickValues,
            tickFormat
        }
    }
    return mapStateToProps
}

const LineGraphContainer = connect(mapMakeToProps)(LineGraph)
export default LineGraphContainer
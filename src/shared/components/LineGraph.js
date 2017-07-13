import React, {PropTypes} from 'react'
import {LineChart} from 'react-d3-components'

const LineGraph = ({width, 
                    height, 
                    margins, 
                    graphData,
                    xScale, 
                    tickValues, 
                    tickFormat
                    }) => {

    const chart = () => (
        <LineChart
                width={width}
                height={height}
                margin={margins}
                data={[graphData]}
                tooltipHtml={(x, y) => "x: " + x + " y: " + y}
                xScale={xScale}
                xAxis={{tickValues, tickFormat}}
            />
    )

    const empty = () => (<div></div>)

    const showChart = graphData !== undefined && graphData.values.length > 0
    return showChart ? chart() : empty()
    
}

LineGraph.PropTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    graphData: PropTypes.object.isRequired,
    xScale: PropTypes.number.isRequired,
    tickValues: PropTypes.array.isRequired,
    tickFormat: PropTypes.string.isRequired
}

export default LineGraph

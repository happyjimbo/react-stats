import React from 'react'
import PropTypes from 'prop-types'
import {VictoryChart, VictoryLine, VictoryTheme, VictoryAxis} from 'victory'
import './LineGraph.css'

const LineGraph = ({width,
                       height,
                       graphData,
                       tickFormatX,
                       tickFormatY,
                       xLabel,
                       padding,
                       domainPadding
                   }) => {

    const chart = () => (
        <div className="LineGraph">
            <VictoryChart theme={VictoryTheme.material} width={width} height={height} domainPadding={domainPadding} padding={padding} >

                <VictoryAxis
                    tickFormat={tickFormatX}
                    fixLabelOverlap={true}
                    label={xLabel}
                />
                <VictoryAxis
                    dependentAxis
                    tickFormat={tickFormatY}
                />

                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                    }}
                    data={graphData}
                />
            </VictoryChart>
        </div>
    )

    const empty = () => (<div></div>)

    const showChart = graphData !== undefined && graphData.length > 0
    return showChart ? chart() : empty()

}

LineGraph.PropTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    graphData: PropTypes.object.isRequired
}

export default LineGraph

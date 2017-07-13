import React, {PropTypes, Component} from 'react'
import {Panel} from 'react-bootstrap'
import LineGraphContainer from '../../shared/containers/LineGraphContainer'
import StatLineGraphSelector from '../selectors/StatLineGraphSelector'

const StatPanel = ({panelStats, statName, display}) => {

    const style = {
        border: 'none',
        margin: 'auto',
        width: "100%",
        marginBottom: '1em'
    }

    return (
        <div>
            <Panel collapsible expanded={display} style={style}>
                <LineGraphContainer items={panelStats} statName={statName} selector={StatLineGraphSelector} />
            </Panel>
        </div>
    )
}

StatPanel.PropTypes = {
    panelStats: PropTypes.array.isRequired,
    statName: PropTypes.string.isRequired,
    display: PropTypes.bool.isRequired
}  

export default StatPanel

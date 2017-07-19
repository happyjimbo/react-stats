import React, {PropTypes} from 'react'
import {Panel} from 'react-bootstrap'
import LineGraphContainer from '../../shared/containers/LineGraphContainer'
import './StatPanel.css'

const StatPanel = ({panelStats, statName, display}) => {

    return (
        <div className="StatPanel">
            <Panel collapsible expanded={display}>
                <LineGraphContainer items={panelStats} statName={statName} />
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

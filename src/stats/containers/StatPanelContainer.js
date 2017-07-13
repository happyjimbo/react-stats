import {connect} from 'react-redux'
import StatPanel from '../components/StatPanel'

const mapStateToProps = (state, props) => {

    const {statName, stats} = props
    const display = props.displayDetails[statName] !== undefined ? props.displayDetails[statName] : false
    const panelStats = stats[statName]
    
    return {
        display,
        panelStats,
        statName
    }
}

const StatPanelContainer = connect(mapStateToProps)(StatPanel)
export default StatPanelContainer
import {connect} from 'react-redux'
import ListGroupComponent from '../../shared/components/ListGroupComponent'
import StatListItemContainer from './StatListItemContainer'
import StatPanelContainer from './StatPanelContainer'

const mapStateToProps = (state) => {

    const ListItem = StatListItemContainer
    const SelectablePanel = StatPanelContainer

    const statState = state.statReceivedReducer

    const items = statState.stats

    const itemType = items ? statState.statType : ""
    const keys = items ? statState.statsOrder : []
    const displayDetails = items ? statState.displayDetailedStat : false

    const itemKeys = items ? Object.keys(items) : []
    itemKeys.forEach(item => !keys.includes(item) ? keys.unshift(item) : false )

    return {
        ListItem,
        SelectablePanel,
        items,
        itemType,
        keys,
        displayDetails,
    }
}

const StatsListGroupContainer = connect(mapStateToProps)(ListGroupComponent)
export default StatsListGroupContainer
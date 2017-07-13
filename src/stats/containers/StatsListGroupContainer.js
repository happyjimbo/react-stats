import {connect} from 'react-redux'
import ListGroupComponent from '../../shared/components/ListGroupComponent'
import StatListItemContainer from './StatListItemContainer'
import StatPanelContainer from './StatPanelContainer'

const mapStateToProps = (state) => {
    
    let items = {}
    let itemType = ""
    let keys = []
    let displayDetails = false
    const ListItem = StatListItemContainer
    const SelectablePanel = StatPanelContainer
    
    const statState = state.statReceivedReducer
    if (statState.stats !== undefined) {        

        items = statState.stats
        itemType = statState.statType
        displayDetails = statState.displayDetailedStat
        
        // Use the keys so that we're not trying to render items before we recieve data,
        // however sort these based on the statsOrder.
        const statsOrder = statState.statsOrder
        keys = statsOrder
    }    

    return {
        items,
        itemType,
        keys,
        displayDetails,
        ListItem,
        SelectablePanel
    }
}

const StatsListGroupContainer = connect(mapStateToProps)(ListGroupComponent)
export default StatsListGroupContainer
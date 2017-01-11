import {connect} from 'react-redux';
import ListItemGroup from '../presentation/ListItemGroup';
import StatListItemContainer from './StatListItemContainer';
import StatPanelContainer from './StatPanelContainer';

const mapStateToProps = (state) => {
    
    let stats = {};
    let statsOrder = [];
    let prices = "";
    let displayDetails = false;

    if (state.statReceivedReducer !== undefined)
    {
        let statState = state.statReceivedReducer;
        if (statState.stats !== undefined)
        {
            stats = statState.stats;
            statsOrder = statState.statsOrder;
            prices = statState.prices;
            displayDetails = statState.displayDetailedStat;
        }
    }

    return {
        stats,
        statsOrder,
        prices,
        displayDetails,
        StatListItemContainer,
        StatPanelContainer
    }
}

const StatsListGroupContainer = connect(mapStateToProps)(ListItemGroup);
export default StatsListGroupContainer;
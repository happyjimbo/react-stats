import {connect} from 'react-redux';
import ListItemGroup from '../presentation/ListItemGroup';
import StatListItemContainer from './StatListItemContainer';

const mapStateToProps = (state) => {
    
    let stats = {};
    let statsOrder = [];
    let prices = "";

    if (state.statReceivedReducer !== undefined)
    {
        let statState = state.statReceivedReducer;
        if (statState.stats !== undefined)
        {
            stats = statState.stats;
            statsOrder = statState.statsOrder;
            prices = statState.prices;
        }
    }

    return {
        stats,
        statsOrder,
        prices,
        StatListItemContainer:StatListItemContainer
    }
}


const StatsListGroupContainer = connect(mapStateToProps)(ListItemGroup);
export default StatsListGroupContainer;
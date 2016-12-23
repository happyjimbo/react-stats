import {connect} from 'react-redux';
import ListItemGroup from '../presentation/ListItemGroup';
import StatListItemContainer from './StatListItemContainer';

const mapStateToProps = (state) => {
    
    let key = "";
    let stats = {};
    let statsOrder = [];

    if (state.statReceivedReducer !== undefined)
    {
        let statState = state.statReceivedReducer;
        let key = statState.key;

        if (statState.stats !== undefined)
        {
            stats = statState.stats;
            statsOrder = statState.statsOrder;
        }
    }

    return {
        key,
        stats,
        statsOrder,
        StatListItemContainer:StatListItemContainer
    }
}


const StatsListGroupContainer = connect(mapStateToProps)(ListItemGroup);
export default StatsListGroupContainer;
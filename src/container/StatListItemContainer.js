import {connect} from 'react-redux';
import ClickListItem from '../presentation/ClickListItem';
import {displayDetailedStats} from '../actions/StatsAction';

const mapStateToProps = (state, props) => {

    let statName = props.statName;
    let stat = props.stats[statName];
    let info = props.prices[statName];

    //TODO: refactor this out to be done in the reducer.
    let change = stat.Change;
    let success = change.charAt(0) === '+';

    return {
        info,
        success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: (stat) => { 
            dispatch(displayDetailedStats(stat));
        }
    }
}

const StatListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ClickListItem);
export default StatListItemContainer;
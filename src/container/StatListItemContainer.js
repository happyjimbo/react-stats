import {connect} from 'react-redux';
import ClickListItem from '../presentation/ClickListItem';
import {DisplayDialogAction} from '../actions/DisplayDialogAction';

const mapStateToProps = (state, props) => {

    let statName = props.statName;
    let stat = props.stats[statName];

    let info = stat.query.results.quote.LastTradePriceOnly;

    let change = stat.query.results.quote.Change;
    let success = change.charAt(0) === '+';

    return {
        info,
        success
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        click: () => { 
            dispatch(DisplayDialogAction());
        }
    }
}

const StatListItemContainer = connect(mapStateToProps, mapDispatchToProps)(ClickListItem);
export default StatListItemContainer;
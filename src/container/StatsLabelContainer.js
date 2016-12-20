import {connect} from 'react-redux';
import StateLabel from '../presentation/StateLabel';

const mapStateToProps = (state) => {

    let lastTradePriceOnly = state.statReceivedReducer.lastTradePriceOnly;
    let error = state.statReceivedReducer.error;

    let text = error === undefined ? lastTradePriceOnly : error;
    let style = error === undefined ? "success" : "danger";    

    return {
        text,
        style
    }
}

const StatsLabelContainer = connect(mapStateToProps)(StateLabel);
export default StatsLabelContainer;
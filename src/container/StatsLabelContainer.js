import {connect} from 'react-redux';
import StateLabel from '../presentation/StateLabel';

const mapStateToProps = (state, props) => {

    //let lastTradePriceOnly = state.statReceivedReducer.lastTradePriceOnly;
    //let info = props.info;
    //let error = state.statReceivedReducer.error;

    //let text = error === undefined ? lastTradePriceOnly : error;
    //let style = error === undefined ? "success" : "danger";

    //console.log("info " + info)

    let text = props.text;
    let style = "success";

    return {
        text,
        style
    }
}

const StatsLabelContainer = connect(mapStateToProps)(StateLabel);
export default StatsLabelContainer;
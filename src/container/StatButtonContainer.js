import {connect} from 'react-redux';
import ClickButton from '../presentation/ClickButton';
import {fetchStat} from '../actions/StatsAction';

const mapStateToProps = (state) => {

    console.log(state.statReceivedReducer);

    return {
        display: true,
        buttonText: "Get Stat",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(fetchStat("LLOY.L"));
        }
    }
}

const StatButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ClickButton);
export default StatButtonContainer;
import {connect} from 'react-redux';
import ClickButton from '../presentation/ClickButton';
import {fetchStat} from '../actions/StatsAction';

const mapStateToProps = (state) => {
    // This should probably not live here anymore as this data is now static..
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
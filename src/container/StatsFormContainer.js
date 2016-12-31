import {connect} from 'react-redux';
import StateForm from '../presentation/StateForm';
import {fetchStat} from '../actions/StatsAction';

let inputValue;

const mapStateToProps = (state) => {
    return {
        getValidationState: () => {},        
        handleChange: (text) => { inputValue = text },
        formValue: state.value,
        searchText: "Search for Stock",
        helpText: "Add .L at the end to look up FTSE stocks",
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick : () => { 
            dispatch(fetchStat(inputValue));
        },
    }
}

const StatsFormContainer = connect(mapStateToProps, mapDispatchToProps)(StateForm);
export default StatsFormContainer;
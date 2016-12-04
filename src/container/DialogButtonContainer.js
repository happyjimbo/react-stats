import {connect} from 'react-redux';
import {DisplayDialogAction} from '../actions/DisplayDialogAction';
import ClickButton from '../presentation/ClickButton';

const mapStateToProps = (state) => {
    return {
        display: !state.displayDialog,
        buttonText: "Open Dialog"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(DisplayDialogAction()); 
        }
    }
}

const DialogButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ClickButton);
export default DialogButtonContainer;
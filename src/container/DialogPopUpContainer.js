import {connect} from 'react-redux';
import {DisplayDialogAction} from '../actions/DisplayDialogAction';
import DialogPopUp from '../presentation/DialogPopUp';

const mapStateToProps = (state) =>  {
    return {
        display: state.displayDialog,
        closeButtonText: "Close Dialog",
        saveButtonText: "Save Input Data",
        titleText: "Ooo what a fancy title",
        bodyText: "The main body of work ;)"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        close: () => {
            dispatch(DisplayDialogAction());
        }
    }
}

const DialogPopUpContainer = connect(mapStateToProps, mapDispatchToProps)(DialogPopUp);
export default DialogPopUpContainer;
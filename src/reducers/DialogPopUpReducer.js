const initialState = {
  displayDialog: false
}

const DialogPopUpReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'DISPLAY_DIALOG':
      var obj = Object.assign({}, state, { displayDialog: action.displayDialog });
      return obj;

    default:
      return state;
  }
};

export default DialogPopUpReducer;
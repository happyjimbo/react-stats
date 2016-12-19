import { DISPLAY_DIALOG } from "../actions/DisplayDialogAction";

const initialState = {
	displayDialog: false
}

export const dialogPopUpReducer = (state = initialState, action) => {

	switch (action.type) {
		case DISPLAY_DIALOG:
			return Object.assign({}, state, { 
				displayDialog: action.displayDialog 
			});
		default:
			return state;
	}
};
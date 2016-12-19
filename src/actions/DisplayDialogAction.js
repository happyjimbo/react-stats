let showDialog = false;

export const DISPLAY_DIALOG = "DISPLAY_DIALOG";

export const DisplayDialogAction = () => { 
  return {
    type: DISPLAY_DIALOG,
    displayDialog: showDialog = !showDialog
  }
};
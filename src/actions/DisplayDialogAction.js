let showDialog = false;

export const DisplayDialogAction = () => { 
  return {
    type: 'DISPLAY_DIALOG',
    displayDialog: showDialog = !showDialog
  }
};
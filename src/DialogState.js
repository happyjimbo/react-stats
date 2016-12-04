class DialogState
{
    constructor()
    {
        this.displayDialog = false;
    }

    get DisplayDialog()
    {
        return this.displayDialog;
    }

    set DisplayDialog(display)
    {
        this.displayDialog = display; 
    }
}
export default new DialogState();
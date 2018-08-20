var currentIndex = atom.config.get ('change-line-length.currentIndex');
var preferredLineLengthValues = atom.config.get ('change-line-length.preferredLineLengthValues');

module.exports =
{
    activate()
    {
        this.commandsDisposable = atom.commands.add ('atom-text-editor:not([mini])',
        {
            'decrement-line-length:toggle' ()
            {
                changePreferredLineLength (-1);
            },

            'increment-line-length:toggle' ()
            {
                changePreferredLineLength (1);
            },
        })
    },

    deactivate()
    {
        atom.config.set ('change-line-length.currentIndex', currentIndex);
        atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[currentIndex]);
        this.commandsDisposable.dispose()
    }
}

function changePreferredLineLength (adjustIndexBy)
{

    if (settingsPaneIsOpen())
    {
        if (atom.config.get ('change-line-length.warningIsDisplayed'))
        {
            let notifications = atom.notifications;

            notifications.addWarning ("There are visual bugs associated with using `change-line-length` with the settings view open.  Closing the settings view is recommended for a smoother experience.");
        }

        // or close pane?  Add another boolean for this?
    }

    else
    {
        let arrayLength = preferredLineLengthValues.length - 1;

        if (! indexIsValid (currentIndex, arrayLength))
            currentIndex = getValidIndex();

        // console.log ("change-line-length index: " + currentIndex);
        currentIndex += adjustIndexBy;

        if (indexIsValid (currentIndex, arrayLength))
            atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[currentIndex], { save: false });
    }
}

function settingsPaneIsOpen()
{
    let panes = atom.workspace.getPaneItems();

    if (panes.indexOf ("SettingsViews") != -1)
        console.log ("yep");

    else
        console.log ("nope");

    console.log (panes);
}

function indexIsValid (indexToCheck, lastValidIndex)
{
    if (indexToCheck < 0)
        return false;

    else if (indexToCheck > lastValidIndex)
        return false;

    return true;
}

function getValidIndex()
{
    // Try to find the index by searching for the item with JS's indexOf() method
    let indexSearch = preferredLineLengthValues.indexOf (atom.config.get ('editor.preferredLineLength'));

    if (indexSearch != -1)
        return indexSearch;

    return 0;
}

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
    let arrayLength = preferredLineLengthValues.length - 1;

    if (! indexIsValid (currentIndex, arrayLength))
        currentIndex = getAValidIndex();

    console.log (currentIndex);
    currentIndex += adjustIndexBy;

    if (indexIsValid (currentIndex, arrayLength))
        atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[currentIndex], { save: false });
}

function indexIsValid (indexToCheck, lastValidIndex)
{
    if (indexToCheck < 0)
        return false;

    else if (indexToCheck > lastValidIndex)
        return false;

    return true;
}

function getAValidIndex ()
{
    // Try to find the index by searching for the item with JS's indexOf() method
    let indexSearch = preferredLineLengthValues.indexOf (atom.config.get ('editor.preferredLineLength'));

    if (indexSearch != -1)
        return indexSearch;

    // If all else fails, just set it to zero
    return 0;
}

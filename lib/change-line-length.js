var currentIndex = atom.config.get ('change-line-length.currentIndex');

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
    let preferredLineLengthValues = atom.config.get ('change-line-length.preferredLineLengthValues');

    if (! indexIsValid (currentIndex, preferredLineLengthValues.length - 1))
        currentIndex = 0;

    currentIndex += adjustIndexBy;

    if (indexIsValid (currentIndex, preferredLineLengthValues.length - 1))
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

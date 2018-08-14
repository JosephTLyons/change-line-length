let currentIndex = atom.config.get ('change-line-length.currentIndex');
let preferredLineLengthValues = atom.config.get ('change-line-length.preferredLineLengthValues');

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
        this.commandsDisposable.dispose()
    }
}

function changePreferredLineLength (adjustIndexBy)
{
    if (! indexIsValid (currentIndex, preferredLineLengthValues.length - 1))
        currentIndex = 0;

    currentIndex += adjustIndexBy;

    if (indexIsValid (currentIndex, preferredLineLengthValues.length - 1))
    {
        atom.config.set ('change-line-length.currentIndex', currentIndex,  { save: false });
        atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[currentIndex], { save: false });
    }
}

function indexIsValid (indexToCheck, lastValidIndex)
{
    if (indexToCheck < 0)
        return false;

    else if (indexToCheck > lastValidIndex)
        return false;

    return true;
}

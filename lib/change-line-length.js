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
    let currentIndex = atom.config.get ('change-line-length.currentIndex');
    let preferredLineLengthValues = atom.config.get ('change-line-length.preferredLineLengthValues');

    if (! indexIsValid (currentIndex, preferredLineLengthValues.length - 1))
        currentIndex = 0;

    let newIndex = currentIndex + adjustIndexBy;

    if (indexIsValid (currentIndex, preferredLineLengthValues.length - 1))
    {
        atom.config.set ('change-line-length.currentIndex', newIndex);
        atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[newIndex]);
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

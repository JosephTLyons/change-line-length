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

function changePreferredLineLength (adjustmentValue)
{
    let preferredLineLengthValues = atom.config.get ('change-line-length.preferredLineLengthValues');

    let currentIndex = atom.config.get ('change-line-length.currentIndex');
    let newIndex = currentIndex + adjustmentValue;

    if (newIndex < 0)
        newIndex = 0;

    else if (newIndex > preferredLineLengthValues.length - 1)
        newIndex = preferredLineLengthValues.length - 1;

    atom.config.set ('change-line-length.currentIndex', newIndex);

    atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[newIndex]);
}

// Todo:
// Remove bugginess
// Find a way to discreetly store the current index adjustment instead of using package settings
// Present array for user to insert in settings (Settings UI for array?)

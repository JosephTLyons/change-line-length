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
    let preferredLineLengthValues = atom.config.get ('change-line-length.preferredLineLengthValues');
    let currentIndex = atom.config.get ('change-line-length.currentIndex');
    let newIndex = currentIndex + adjustIndexBy;

    // console.log ("current index: ", newIndex);

    if (newIndex < 0)
        return;

    else if (newIndex > preferredLineLengthValues.length - 1)
        return;

    else
    {
        // console.log ("New index: ", newIndex);
        atom.config.set ('change-line-length.currentIndex', newIndex);
        atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[newIndex]);
    }
}

// Todo:
// Remove bugginess, fix error sound when using commands
// Find a way to discreetly store the current index adjustment instead of using package settings
// Present array for user to insert in settings (Settings UI for array?)
// Visual pop-up of new value?
// Add a README.md

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

    if (newIndex < 0)
        return;

    else if (newIndex > preferredLineLengthValues.length - 1)
        return;

    atom.config.set ('change-line-length.currentIndex', newIndex);
    atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[newIndex]);
}

module.exports =
{
    activate()
    {
        this.commandsDisposable = atom.commands.add ('atom-text-editor:not([mini])',
        {
            'decrement-line-length:toggle' ()
            {
                changePreferredLineLength (0);
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
    let preferredLineLengthValues = [80, 100];
    //let newIndex = /* old value */ + adjustmentValue

    atom.config.set ('editor.preferredLineLength', preferredLineLengthValues[adjustmentValue]);
}

module.exports =
{
    activate()
    {
        this.commandsDisposable = atom.commands.add ('atom-text-editor:not([mini])',
        {
            'change-line-length:toggle' ()
            {
                toOptionOne();
            },
        })
    },

    deactivate()
    {
        this.commandsDisposable.dispose()
    }
}

function toOptionOne()
{
    atom.config.set ('editor.preferredLineLength', 100);
}

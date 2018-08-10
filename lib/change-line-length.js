module.exports =
{
    activate()
    {
        this.commandsDisposable = atom.commands.add ('atom-text-editor:not([mini])',
        {
            'change-line-length:toggle' ()
            {
                toOptionOne (atom.workspace.getActiveTextEditor());
            },
        })
    },

    deactivate()
    {
        this.commandsDisposable.dispose()
    }
}

function toOptionOne (editor)
{
    editor.preferredLineLength = 80;
    console.log (editor.preferredLineLength);
}

# change-line-length
An [Atom](https://atom.io) text editor package that lets you cycle through
different user-defined Preferred Line Length settings

## Information:

Because I frequently switch my Preferred Line Length between 80 characters (for
documentation) and 100 characters (for code), I often spend too much time
navigating to the settings panel, scrolling down, and manually adjusting the
setting.  I found some packages that will allow you to have multiple wrap
guides, but this became distracting for me.  So I decided it would be best to
make a package that allows the user to set as many Preferred Line Length
settings as they want and give them the option to cycle through them quickly.

## Instructions:

Atom doesn't seem to provide a way for the user to input values into an array in
the package settings in the same way one can input integers, so you must edit
the package.json to add your own custom preferred line length values.  Simply
change the default values in the preferredLineLengthValues array to whatever you
like.

## TODO:

- [ ] Remove bugginess
    - [ ] Jittering wrap guide
    - [ ] Sometimes it flickers between two settings
    - [ ] Sometimes Atom says it needs to restart and begins to act very strange
- [ ] Fix error sound when using commands
- [ ] Find a way to discreetly store the current index adjustment instead of
using package settings
- [ ] Present array for user to insert in settings (Settings UI for array?)
- [ ] Visual pop-up of new value?

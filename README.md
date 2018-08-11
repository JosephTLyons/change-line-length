# change-line-length
An [Atom](https://atom.io) text editor package that lets you cycle through
different user-defined Preferred Line Length settings.

## Instructions:

Because Atom doesn't seem to provide a way for the user to input values into an
array in the package settings in the same way one can input integers, you must
edit the package.json to add your own custom preferred line length values.  
Simply change the default values in the preferredLineLengthValues array to
whatever you like.

## TODO:
- [ ] Remove bugginess (jittering wrap guide, sometimes it flickers between two
settings)
- [ ] Fix error sound when using commands
- [ ] Find a way to discreetly store the current index adjustment instead of
using package settings
- [ ] Present array for user to insert in settings (Settings UI for array?)
- [ ] Visual pop-up of new value?

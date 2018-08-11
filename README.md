# change-line-length
An [Atom](https://atom.io) text editor package that lets you cycle through
different user-defined Preferred Line Length settings

## Information:

Because I frequently switch my Preferred Line Length between 80 characters (for
documentation) and 100 characters (for code), I often spend too much time
navigating to the editor settings panel, scrolling down, and manually adjusting
this setting.  There exists some packages that allow you to insert multiple wrap
guides, but I've found this solution to be somewhat of a distraction.  So I
decided it would be best to make a package that allows the user to set as many
Preferred Line Length settings as they want and give them the option to cycle
through them quickly, with key commands.

## Instructions:

Atom doesn't seem to provide a way for the user to input values into an array in
the package settings in the same way one can input integers (correct me if I'm
wrong!), so you must edit the package.json to add your own custom preferred line
length values.  Simply change the default values in the
preferredLineLengthValues array to whatever you like.

## TODO:

- [ ] Remove bugginess
    - [ ] Preferred Line Length sometimes jitters once when switching between
    two settings
    - [ ] Sometimes it endlessly cycles between two settings
    - [ ] Sometimes Atom says it needs to restart and begins to act very strange
- [ ] Fix error sound when using commands
- [ ] Find a way to discreetly store the current index adjustment instead of
using package settings
- [ ] Present array for user to insert in settings (Settings UI for array?)
- [ ] Visual indication of PLL, either a pop-up of new value or have down in
bottom menu (Ex. "PLL: 80")

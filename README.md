# change-line-length

An [Atom](https://atom.io) text editor package that lets you cycle through
different user-defined Preferred Line Length settings

## History:

Because I frequently switch my Preferred Line Length between 80 characters (for
documentation) and 100 characters (for code), I often spend too much time
navigating to the editor settings panel, scrolling down, and manually adjusting
this setting.  There exists some packages that allow you to insert multiple wrap
guides, but I've found this solution to be somewhat of a distraction.  Also,
many packages, such as [`autoflow`](https://atom.io/packages/autoflow) and
[`text-align`](https://atom.io/packages/text-align) are dependent upon the
Preferred Line Length setting; having multiple wrap guides can be confusing when
using these packages as only one of the wrap guides will represent the true
Preferred Line Length value being used.  So I decided it would be best to make a
package that allows the user to set as many Preferred Line Length settings as
they want and give them the option to cycle through them quickly, with key
commands.

## Instructions:

Atom doesn't seem to provide a way for the user to input values into an array in
the package settings in the same way one can input integers (correct me if I'm
wrong!), so you must edit the `config.cson` to add your own custom preferred
line length values.  Find the settings section for `change-line-length` in the
`config.cson` file and add your preferred values:

    "change-line-length":
      preferredLineLengthValues: [
        80
        100
        120
        ...
      ]

After you've saved you `config.cson` file, restart Atom for the settings to take
effect.  You should be able to use the package to quickly change between your
Preferred Line Length settings.

## Thank You
Thanks to both @[Aerijo](https://github.com/Aerijo) and
@[DamnedScholar](https://github.com/DamnedScholar) for helping me
[here](https://discuss.atom.io/t/changing-an-atom-setting-through-code/57728)
and
[here](https://discuss.atom.io/t/bugginess-associated-with-changing-atom-settings-via-code/57772)
when I ran into bugs putting this package together.

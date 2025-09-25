@echo off
setlocal enabledelayedexpansion

REM Define file extensions to process
set "exts=jpg jpeg png gif bmp mp3 wav m4a aac flac"

for %%e in (%exts%) do (
    for %%f in (*.%%e) do (
        set "filename=%%~nf"
        set "ext=%%~xf"

        REM Remove hyphens, underscores, spaces, parentheses, and the word "rotate"
        set "newname=!filename:-=!"
        set "newname=!newname:_=!"
        set "newname=!newname: =!"
        set "newname=!newname:(=!"
        set "newname=!newname:)=!"
        set "newname=!newname:rotate=!"

        if not "!filename!!ext!"=="!newname!!ext!" (
            echo Renaming "%%f" to "!newname!!ext!"
            ren "%%f" "!newname!!ext!"
        )
    )
)

echo Done.
exit

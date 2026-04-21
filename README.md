# simple-html-slides

A minimal slides system for HTML presentations.

Right now it is only compatible with desktop and laptop, *not* touch devices (mobile phones, tablets, ...).

The code is in `files/` and consists in the companion file `pages.js`to be put in the folder containing the HTML presentation files. Each slide is a separate html file [1] that must each load (near the end) the pages.js as a script.

The file pages.js starts with an `Array` containing the (ordered) list of your slides: just modify it. It looks like this:

```js
let pages = [
 "index.html",

"page-1.html",
 "page-2.html",

"hex-1.html",
 "hex-2.html",

"end.html",
];
```

On the browser, you switch slides with PageUp and PageDown keyboard key.

Items can be hidden, and revealed by using the left and right arrow keys (that changes slides if there is nothing more to reveal/hide). For this, put the class `reveal` in the tag of the concerned element(s).

Folder `example/` contains an example, just look. It contains in particular a simple example of css style file called `slide.css`. The design of this style file can be improved (right now it uses a mix of absolute and relative size units).

A working example (with a former version: arrows don't transition between slides, only page up/down) can be found online at: https://www.math.univ-toulouse.fr/~cheritat/Exposes/IHP-2026-3/ if that link is still active. 

[1] This is not optimal in terms of pre-loading things but for normal simple presentations, this should work.

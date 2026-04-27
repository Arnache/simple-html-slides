# simple-html-slides

A minimal slides system for HTML presentations.

Right now it is only compatible with desktop and laptop, *not* touch devices (mobile phones, tablets, ...).

## Slideshow preparation

The code is in `files/` and consists in the companion file `simple-html-slides.js`to be put in the folder containing the HTML presentation files (or in another folder). 

You need to create a file, call it as you like (here we choose `pages.js`). Each slide must be a separate html file[^1] that shall each load `pages.js `*at the beginning* of the `<body>` element (or just before it)  with a `<script>`tag as follows:

```html
    ...
  </head> 
  <script type="module" src="pages.js"></script>
  <body>
    ... 
  </body>
```

The file `pages.js`shall look like this:

```js

import init from "./simple-html-slides.js";

init([
  "index.html",
  
  "page-1.html",
  "page-2.html",
  
  "hex.html",
  "math.html",

  "end.html",
]);

```

It calls `init` whit argument an `Array` containing the (ordered) list of your slides: just modify it.

## Slideshow presentation

On the browser, you switch slides with PageUp and PageDown keys on the keyboard.

## Items within a slide

Items can be hidden, and revealed by using the left and right arrow keys (that changes slides if there is nothing more to reveal/hide). For this, put the class `reveal` in the tag of the concerned element(s) as in:

```html
  ...
   <ul>
    <li>first item</li>
    <li class="reveal">second item</li>
    <li class="reveal">third item</li>
  </ul>
  ...
```

## Examples

Folder `example/` contains an example, just look. It contains in particular a simple example of css style file called `slide.css`not pretending to be perfect. 

A real-life example (with a former version of the js code: arrows don't transition between slides, only page up/down) can be found online at: https://www.math.univ-toulouse.fr/~cheritat/Exposes/IHP-2026-3/ if that link is still active. 

## Footnotes

[^1]: This is not optimal in terms of pre-loading things but for normal simple presentations, this should work.

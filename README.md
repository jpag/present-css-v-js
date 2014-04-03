# CSS and JS Animations 

## CSS
	SASS css compiled with http://alphapixels.com/prepros/ (Free version)
	There is a dynamic fluid grid (responsive) as well as a static grid available
	Top and Bottom wrappers are using HTML5 boilerplate

## Javascript
	View builder extend. 

	JQuery v1.10 (not 2.0) supports old IE.
	Handlebars v 1.1.2

## HTML templating:

	- could use underscore interpolate to switch to {{}} handlebars/mustache style templating
    
    .templateSettings = {
     interpolate: /\{\{(.+?)\}\}/g
    };

	- or just use handlebars


## Build Process
	Optimize files using Require.

	First, install the requirejs npm package (if you haven't already):
    npm install -g requirejs

	Then run build.sh, which is found in /scripts:

    bash build.sh

## TODO:

## references:

https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_animations
https://github.com/mrdoob/stats.js/
http://css-tricks.com/myth-busting-css-animations-vs-javascript/
http://css-tricks.com/using-requestanimationframe/
http://www.codefessions.com/2012/03/how-fast-is-html5-canvas-part-2.html
http://css-tricks.com/snippets/css/keyframe-animation-syntax/
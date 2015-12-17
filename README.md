# Alt Always

<a href="https://github.com/posthtml/posthtml"><img src="http://posthtml.github.io/posthtml/logo.svg" alt="PostHTML Logo" width="80" height="80" align="right"></a>

[![NPM Version][npm-img]][npm] [![Build Status][ci-img]][ci]

[Alt Always](http://github.com/ismamz/posthtml-alt-always) is a [PostHTML] plugin that always add alt attribute for images that don't have it (accessibility reasons).

> **Every image must have an `alt` attribute.** This is a requirement of HTML standard (with perhaps a few exceptions in HTML5). Images without an alt attribute are likely inaccessible. In some cases, images may be given an empty or null `alt` attribute (e.g., `alt=""`).

Read more about [Alternative Text](http://webaim.org/techniques/alttext/).

```html
<!-- BEFORE -->
<img src="image.jpg">
<img src="image.png" class="foo">
<img src="image.gif" alt="I already have alternative text">

<!-- AFTER -->
<img src="image.jpg" alt="">
<img src="image.png" class="foo" alt="">
<img src="image.gif" alt="I already have alternative text">
```

## Usage

Add **Alt Always** to your build tool:

```bash
npm install posthtml-alt-always --save-dev
```

#### Node

```js
require('posthtml-alt-always').process(YOUR_HTML, { /* options */ });
```

#### PostHTML

Add [PostHTML] to your build tool:

```bash
npm install posthtml --save-dev
```

Load Alt Always as a PostHTML plugin:

```js
posthtml([
	require('posthtml-alt-always')({ /* options */ })
]).process(YOUR_HTML, /* options */);
```

#### Gulp

Add [Gulp PostHTML] to your build tool:

```bash
npm install gulp-posthtml --save-dev
```

Enable Alt Always within your Gulpfile:

```js
var posthtml = require('gulp-posthtml');

gulp.task('html', function () {
	return gulp.src('./src/*.html').pipe(
		posthtml([
			require('posthtml-alt-always')({ /* options */ })
		])
	).pipe(
		gulp.dest('.')
	);
});
```

#### Grunt

Add [Grunt PostHTML] to your build tool:

```bash
npm install grunt-posthtml --save-dev
```

Enable [alt-always] within your Gruntfile:

```js
grunt.loadNpmTasks('grunt-posthtml');

grunt.initConfig({
	posthtml: {
		options: {
			use: [
				require('posthtml-alt-always')({ /* options */ })
			]
		},
		dist: {
			src: '*.html'
		}
	}
});
```

[ci]:      https://travis-ci.org/ismamz/posthtml-alt-always
[ci-img]:  https://img.shields.io/travis/ismamz/posthtml-alt-always.svg
[npm]:     https://www.npmjs.com/package/posthtml-alt-always
[npm-img]: https://img.shields.io/npm/v/posthtml-alt-always.svg

[Gulp PostHTML]:  https://github.com/posthtml/gulp-posthtml
[Grunt PostHTML]: https://github.com/TCotton/grunt-posthtml
[PostHTML]:       https://github.com/posthtml/posthtml

[alt-always]: https://github.com/ismamz/posthtml-alt-always

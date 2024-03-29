# Monster Gulp Starter v2.0.0 

## Don't Forget

- you must download [Node.js](https://nodejs.org/en/) And [Cmder](https://cmder.net/)
- you must put all the `css` or `sass` files in folder `style/`
- The gulpfile.js is empty choose from the **Below Codes** the codes you want
- all the `JavaScript` files will comping in logic.js in build folder
- all the `Sass` files will converted to `CSS` in build folder

## Steps

- download Files
- put all your web files to `src` folder
- put all the `Images` in this path `build/images/`
- open terminal and run `npm install --save-dev gulp` to install gulp
- open terminal and check if the gulp is installed `gulp --version` 
- open terminal and run `npm update` to update the files you need
- open terminal and run `npm install` to install the files you need
- choose from the **Bellow Codes** the codes you want and paste it in `gulpfile.js`
- put all the `style` files in the **style folder**
- open terminal and run `gulp` to serve\open the app

## Basic

- this variables must be in **gulpfile.js**

```js
// the gulp
const gulp = require("gulp");
// for auto refresh
const livereload = require("gulp-livereload");
// for run many functions
const { parallel } = require("gulp");
```

## HTML CSS JS

- for projects that coding by `html css js`
<details>
<summary>gulpfile</summary>
<p>

```js
const livereload = require("gulp-livereload");
const gulp = require("gulp");
// gulp plugin to minify HTML.
const htmlmin = require("gulp-htmlmin");
// for run many functions
const { parallel } = require("gulp");
// gulp plugin to minify CSS, using clean-css
const cleanCSS = require("gulp-clean-css");
//  to cancat files in just one file
var concat = require("gulp-concat");

// for html
function html() {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"))
    .pipe(livereload());
}

// for css
function css() {
  return gulp
    .src("src/style/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(livereload());
}

// for js
function js() {
  return gulp
    .src("src/**/*.js")
    .pipe(concat("logic.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(livereload());
}

exports.default = function () {
  require("./server.js");
  livereload.listen();
  gulp.watch(
    ["src/**/*.html", "src/**/*.css", "src/**/*.js"],
    parallel(html, css, js)
  );
};
```

</p>
</details>

## PUG SCSS JS

- for projects that coding by `pug sass js`
<details>
<summary>gulpfile</summary>
<p>

```js
const livereload = require("gulp-livereload");
const gulp = require("gulp");
// for run many function
const { parallel } = require("gulp");
// gulp plugin to minify CSS, using clean-css
const cleanCSS = require("gulp-clean-css");
// gulp plugin for sass
var sass = require("gulp-sass")(require("sass"));
// gulp plugin to convert .pug to .html
const pugTohtml = require("gulp-pug");
//  to cancat files
var concat = require("gulp-concat");

// for pug
function pug() {
  return gulp
    .src("src/**/*.pug")
    .pipe(pugTohtml({}))
    .pipe(gulp.dest("build"))
    .pipe(livereload());
}

// for sass
function sassTocss() {
  return gulp
    .src("src/style/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("build/css"))
    .pipe(livereload());
}

// for js
function js() {
  return gulp
    .src("src/**/*.js")
    .pipe(concat("logic.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(livereload());
}

exports.default = function () {
  require("./server.js");
  livereload.listen();
  gulp.watch(
    ["src/**/*.pug", "src/**/*.scss", "src/**/*.js"],
    parallel(sassTocss, js, pug)
  );
};
```

</p>
</details>

## HTML

- for just `html`
<details>
<summary>gulpfile</summary>
<p>

```js
// gulp plugin to minify HTML.
const htmlmin = require("gulp-htmlmin");

// for html
function html() {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"))
    .pipe(livereload());
}

exports.default = function () {
  require("./server.js");
  livereload.listen();
  gulp.watch(["src/**/*.html"], parallel(pug));
};
```

</p>
</details>

## PUG

- for just `pug`
<details>
<summary>gulpfile</summary>
<p>

```js
const pugTohtml = require("gulp-pug");

// for pug
function pug() {
  return gulp
    .src("src/**/*.pug")
    .pipe(pugTohtml({}))
    .pipe(gulp.dest("build"))
    .pipe(livereload());
}

exports.default = function () {
  require("./server.js");
  livereload.listen();
  gulp.watch(["src/**/*.pug"], parallel(pug));
};
```

</p>
</details>

## SASS

- for just `sass`
<details>
<summary>gulpfile</summary>
<p>

```js
// gulp plugin to minify CSS, using clean-css
const cleanCSS = require("gulp-clean-css");
// gulp plugin for sass
var sass = require("gulp-sass")(require("sass"));

// for sass
function sassTocss() {
  return gulp
    .src("src/style/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("build/css"))
    .pipe(livereload());
}

exports.default = function () {
  require("./server.js");
  livereload.listen();
  gulp.watch(["src/**/*.sass"], parallel(sassTocss));
};
```

</p>
</details>

## CSS

- for just `css`
<details>
<summary>gulpfile</summary>
<p>

```js
// gulp plugin to minify CSS, using clean-css
const cleanCSS = require("gulp-clean-css");
//  to cancat files
var concat = require("gulp-concat");

// for css
function css() {
  return gulp
    .src("src/style/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(livereload());
}

exports.default = function () {
  require("./server.js");
  livereload.listen();
  gulp.watch(["src/**/*.css"], parallel(css));
};
```

</p>
</details>

> [Gulp js crash course](https://www.youtube.com/watch?v=vW7up4wrBs4)
> [Pug js crash course](https://www.youtube.com/watch?v=gDKcoSVzdLs&t=6s)


## App Info

### Author

Mohamed Monster

[About Me](https://about-monster.web.app/)

[My Portfolio](https://z-monster.notion.site/Monster-Portfolio-dd12852c73ec477a9ba740de03a9acd5)

[My GitHub](https://github.com/Monster-Mohamed)

### Version

2.0.0

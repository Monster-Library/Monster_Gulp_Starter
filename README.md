# Monster Gulp

## Don't Forget

- You must download [Node.js](https://nodejs.org/en/) And [Cmder](https://cmder.net/)
- open terminal and run `npm install` to install the files you need
- put all your web files to **src** folder
- do **NOT** put **HTML** files in any folder just leave it in `src/`
- put the **CSS** files in **style** folder
- put the **JavaScript** files in **JS** folder
- put all the **Images** in this path `build/images/`
- all the **JavaScript** files will compination in logic.js in build folder
- all the **CSS** files will compination in style.css in build folder

## gulpfile.js

<details>
<summary>gulpfile</summary>
<p>

```js
const livereload = require("gulp-livereload");
const gulp = require("gulp");
// gulp plugin to minify HTML.
const htmlmin = require("gulp-htmlmin");
const { parallel } = require("gulp");
// gulp plugin to minify CSS, using clean-css
const cleanCSS = require("gulp-clean-css");
//  to cancat files
var concat = require("gulp-concat");

// for html
function html() {
  return gulp
    .src("src/*.html")
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
    .pipe(gulp.dest("build"))
    .pipe(livereload());
}

// for js
function js() {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("logic.js"))
    .pipe(gulp.dest("build"))
    .pipe(livereload());
}

exports.default = function () {
  require("./server.js");
  livereload.listen();

  gulp.watch(["src/*.html", "src/*.css", "src/*.js"], parallel(html, css, js));
};
```

</p>
</details>

## package.json

<details>
<summary>package</summary>
<p>

```json
{
  "name": "monster-game",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": {
    "gulp": "^4.0.2",
    "gulp-clean-css": "^4.3.0",
    "gulp-concat": "^2.6.1",
    "gulp-livereload": "^4.0.2"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Monster",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "gulp-htmlmin": "^5.0.1",
    "static-server": "^2.2.1"
  }
}
```

</p>
</details>

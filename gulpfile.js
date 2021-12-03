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

"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("app/sass/style.scss")
    // .pipe(plumber())
    // .pipe(sourcemap.init())
    .pipe(sass())
    // .pipe(postcss([
    //   autoprefixer()
    // ]))
    // .pipe(sourcemap.write("."))
    .pipe(gulp.dest("app/css/"))
});

gulp.task("html", function () {
  return gulp.src("app/**/*.html")
  .pipe(gulp.dest("dist"))
});

gulp.task("fonts", function () {
  return gulp.src(["app/fonts/**/*.{woff,woff2}"])
    .pipe(gulp.dest("dist/fonts"));
});

gulp.task("images", function () {
  return gulp.src("app/img/**/*.{png,jpg,svg}")
  .pipe(gulp.dest("dist/img"))
});

gulp.task("js", function () {
  return gulp.src("app/js/**/*.js")
  .pipe(gulp.dest("dist/js"))
});

gulp.task("server", function () {

    server.init({
        server: "app/"
    });

  gulp.watch("app/sass/**/*.scss", gulp.series("css"));
  gulp.watch("app/*.html").on('change', server.reload);
});

gulp.task("start", gulp.series("server"));

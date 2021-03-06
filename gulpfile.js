'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const watchSass = require("gulp-watch-sass")
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});

//gulp.task("sass:watch", () => watchSass([
//  "./public/*.{scss,css}",
//  "!./public/libs/**/*"
//])
//  .pipe(sass())
//  .pipe(gulp.dest("./public")));
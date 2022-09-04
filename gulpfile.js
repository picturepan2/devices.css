const gulp = require("gulp");
const sass = require('gulp-sass')(require('node-sass'));
const cleancss = require('gulp-clean-css');
const csscomb = require('gulp-csscomb');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const { exec } = require('child_process');

function css() {
  return gulp
    .src('./src/devices.scss')
    .pipe(sass({outputStyle: 'compact', precision: 2})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(gulp.dest('./dist'))
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./docs/assets/css'));
}

function web_css() {
  return gulp
    .src(['./src/devices.scss', './docs/scss/demo.scss'])
    .pipe(sass({outputStyle: 'compact', precision: 2})
      .on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(csscomb())
    .pipe(cleancss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./docs/assets/css'));
}

function web_docs() {
  return gulp
    .src('./docs/pug/!(_)*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./docs'));
}

function watch() {
  gulp.watch('./**/*.scss', gulp.series(css, web_css));
  gulp.watch('./**/*.pug', gulp.series(web_docs, web_css));
}

exports.watch = watch;
exports.css = css;
exports.web = gulp.series(web_docs, web_css);
exports.default = css;
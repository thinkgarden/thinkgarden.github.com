var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');


gulp.task('css', function () {
  var processors = [
    atImport,
    require('postcss-simple-vars')({ silent: true }),
    require('postcss-nested') ,
    autoprefixer,
    mqpacker,
    cssnano
  ];
  return gulp.src('./styles/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('css'));
});



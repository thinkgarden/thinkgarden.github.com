var gulp = require('gulp');
var plugins = require('gulp-load-plugins');

var $ = plugins();

gulp.task('css', function () {
  return gulp.src('./styles/app.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ["last 2 versions","ie >= 9"]
    }))
    .pipe(gulp.dest('css'))
});



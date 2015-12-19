var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass',function () {
  gulp.src('styles/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
  gulp.watch('styles/*.scss', ['sass']);
})

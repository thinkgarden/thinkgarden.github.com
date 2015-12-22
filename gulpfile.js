var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function(){
  return gulp.src('images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('images'));
});

gulp.task('sass',function () {
  gulp.src('styles/*.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(minify())
      .pipe(gulp.dest('css'))
});

gulp.task('watch', function () {
  gulp.watch('styles/*.scss', ['sass']);
})

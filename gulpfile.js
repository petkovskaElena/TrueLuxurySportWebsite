var gulp = require('gulp')
, wait = require('gulp-wait');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var image = require('gulp-image');
 
  gulp.task('sass', function(){
    // return gulp.src('src/scss/**/*.scss')
       return gulp.src('src/scss/styles.scss')
      .pipe(wait(500))
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './'
      },
    })
  });

  gulp.task('image', function () {
    gulp.src('src/images/*')
      .pipe(image())
      .pipe(gulp.dest('dist/images'));
  });

  gulp.task('watch', ['browserSync', 'sass', 'image'], function (){
    gulp.watch('src/scss/**/*.scss', ['sass']); 
  });
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
gulp.task('hello', function() {
    console.log('Hello World');
  });

  gulp.task('sass', function(){
    // return gulp.src('src/scss/**/*.scss')
       return gulp.src('src/scss/styles.scss')
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

  gulp.task('watch', ['browserSync', 'sass'], function (){
    gulp.watch('src/scss/**/*.scss', ['sass']); 
  });
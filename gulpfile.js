var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('connect', function(){
  connect.server({
    root: '.',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src(['./**/**/*.scss', '!./node_modules/**/**/*.scss'])
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest(function(file) {
        return file.base;
    }));
});

gulp.task('livereload', function (){
  gulp.src('./**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./**/**/*.scss', '!./node_modules/**/**/*.scss'], ['sass']);
  gulp.watch(['./**/*.html', './**/*.css'], ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
var gulp = require('gulp');

// Compile Bootstrap
gulp.task('build-less', function(){
  return gulp.src('client/css/styles.less')
    .pipe(less())
    .pipe(gulp.dest('client/css'));
});

gulp.task('default', ['build-less']);

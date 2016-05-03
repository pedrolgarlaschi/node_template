var gulp = require('gulp');
gulp.task('vendors' , function(){

	return gulp.src('src/javascript/vendors/**').pipe(gulp.dest('www'));

})
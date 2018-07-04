var gulp = require('gulp');
gulp.task('fonts' , function(){
	return gulp.src('src/client/fonts/**').pipe(gulp.dest('public/fonts'));
});
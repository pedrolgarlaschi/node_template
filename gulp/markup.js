var gulp = require('gulp');
gulp.task('markup' , function(){
	return gulp.src('src/client/htdocs/**').pipe(gulp.dest('public'));
});
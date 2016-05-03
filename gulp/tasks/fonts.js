var gulp = require('gulp');


gulp.task('fonts',function(){

	var dest = './www/fonts'

	return gulp.src('./src/fonts/**')
	.pipe(gulp.dest(dest));
});
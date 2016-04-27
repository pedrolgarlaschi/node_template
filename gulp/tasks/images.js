var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');


gulp.task('images',function(){

	var dest = './www/images'

	return gulp.src('./src/images/**')
	.pipe(changed(dest))
	.pipe(imagemin())
	.pipe(gulp.dest(dest));
});
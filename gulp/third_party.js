'use strict'

const gulp = require('gulp');
gulp.task('third_party' , () => {
	return gulp.src('src/client/third_party/**').pipe(gulp.dest('public/js'));
})
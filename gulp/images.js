'use strict'

const gulp = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

gulp.task('images',() =>{

	var dest = './public/images'
	return gulp.src('./src/client/images/**')
	.pipe(changed(dest))
	.pipe(imagemin())
	.pipe(gulp.dest(dest));
});
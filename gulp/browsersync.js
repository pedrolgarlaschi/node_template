'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
const nodemon = require('gulp-nodemon');


gulp.task('browser-sync', ['nodemon'], () => {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        port: 4000,
	});
});

gulp.task('nodemon',  (cb) => {
	
	let started = false;
	return nodemon({
		script: './index.js'
	}).on('start',  () => {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});
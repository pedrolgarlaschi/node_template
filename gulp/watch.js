'use strict'

const gulp = require('gulp');
const watch = require('gulp-watch');
gulp.task('watch' , ()=>{
	watch('src/client/images/', ()=>{gulp.start('images');});
	watch('src/client/scss/', ()=>{gulp.start('sass');});
	watch('src/client/third_party/', ()=>{gulp.start('third_party');});
	watch('src/client/htdocs/', ()=>{gulp.start('markup');});
	watch('src/client/fonts/', ()=>{gulp.start('fonts');});
	watch('src/client/js/', ()=>{gulp.start('browserify');});

	
});

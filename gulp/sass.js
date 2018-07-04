'use strict'

const gulp  = require('gulp') 
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

gulp.task('sass' , ()=>{

	gulp.src('./src/client/scss/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./public/css'))
	.on('error' , (err) => {console.log('sass err:' , err);});
})
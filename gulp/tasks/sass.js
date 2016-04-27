var gulp  = require('gulp') 
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

gulp.task('sass' , function(){
	gulp.src('./src/scss/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
	}))
	.pipe(gulp.dest('./www'))
	.on('error' , function(err){console.log('sass err:' , err);});
})

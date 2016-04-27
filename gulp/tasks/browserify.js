var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('browserify' , function(){

	var bundler = browserify({
		cache:{},
		packageCache:{},
		fullPaths:true,
		entries:['./src/javascript/client/main.js'],
		extensions:['.js']
	});

	var bundle = function(){
		return bundler.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./www/'))
		.on('end' , function(){console.log('end')})
	};

	return bundle();
})

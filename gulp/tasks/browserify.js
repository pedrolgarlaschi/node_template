var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

gulp.task('browserify' , function(){

	var bundler = browserify({
		cache:{},
		packageCache:{},
		fullPaths:true,
		entries:['./src/javascript/client/main.js'],
		extensions:['.js'],
		debug:true
	}).transform(babelify.configure({presets: ["es2015"]}))

	var bundle = function(){
		return bundler.bundle()
		.on('error' , function(err){ console.log('err: ' , err);})
		.pipe(source('main.js'))
    	.pipe(buffer())	
    	//.pipe(uglify())
		.pipe(gulp.dest('./www/'))
		.on('end' , function(){})
	};

	if(global.isWatching)
	{
		bundler = watchify(bundler);
		bundler.on('update' , bundle);
	}

	return bundle();
})

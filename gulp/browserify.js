const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

gulp.task('browserify' , () =>{


	var bundler = browserify({
		cache:{},
		packageCache:{},
		fullPaths:true,
		entries:['./src/client/js/index.js'],
		extensions:['.js'],
		debug:true
	}).transform(babelify.configure({presets: ["es2015"]}))

	let bundle = ()=>{
		return bundler.bundle()
		.on('error' , (err) => { console.log('err: ' , err);})
		.pipe(source('index.js'))
    	.pipe(buffer())	
    	//.pipe(uglify())
		.pipe(gulp.dest('./public/js/'))
		.on('end' , ()=>{})
	};

	return bundle();

})
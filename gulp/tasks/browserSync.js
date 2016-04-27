var gulp  = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync' , ['build'] , function(){

	browserSync.init(['www/**'] , {
		server:{
			baseDir:['www','src']
		}
	})
});

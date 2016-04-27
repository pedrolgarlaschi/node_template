var gulp  = require('gulp');
gulp.task('watch' , ['setWatch','browserSync'] , function(){

	gulp.watch('src/scss/**' , ['sass']);
	gulp.watch('src/images/**' , ['images']);
	gulp.watch('src/htdocs/**' , ['markup']);

});
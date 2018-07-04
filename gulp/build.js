'use strict'
const gulp = require('gulp');
gulp.task('build',['sass' , 'images' , 'markup' , 'fonts' , 'third_party' , 'browserify']);
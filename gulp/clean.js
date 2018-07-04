'use strict'


const gulp = require('gulp');
const clean = require('gulp-clean');
 
gulp.task('clean',  () => {
    gulp.src('public/css/*', {read: false}).pipe(clean());
    gulp.src('public/images/*', {read: false}).pipe(clean());
    gulp.src('public/fonts/*', {read: false}).pipe(clean());
    gulp.src('public/js/*', {read: false}).pipe(clean());
});
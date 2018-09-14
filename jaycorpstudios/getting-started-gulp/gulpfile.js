const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const babel = require('gulp-babel');
const util = require('gulp-util');
const distFolder = './build/';

gulp.task('pug', function(){
    return gulp.src('./src/**/*.pug')
            .pipe(pug())
            .pipe(gulp.dest(distFolder));
});

gulp.task('less', function(){
    return gulp.src('./src/**/*.less')
            .pipe(less())
            .pipe(gulp.dest(distFolder));
});
gulp.task('js', function(){
    return gulp.src('./src/**/*.js')
            .pipe(babel())
            .on('error', function(e){ console.error(e)})
            .pipe(gulp.dest(distFolder));
});

gulp.task('default', ['js', 'pug', 'less']);


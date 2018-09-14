'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    fs = require('fs-extra'),
    babel = require("gulp-babel");

gulp.task('default', function () {
    gulp.start('styles', 'scripts');
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('./sass/**/*.scss', ['styles']);
    gulp.watch('./es6/**/*.js', ['scripts']);
});

gulp.task('styles', ['clean'], function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./source/css'))
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
        .pipe(notify({message: 'CSS - task completed'}))
        .pipe(livereload());
});

gulp.task('scripts', ['clean'], function () {
    gulp.src('./es6/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./source/js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
        .pipe(notify({message: 'JS - task completed'}))
        .pipe(livereload());
});

gulp.task('clean', function () {
    fs.removeSync('./dist');
    fs.removeSync('./source');
});

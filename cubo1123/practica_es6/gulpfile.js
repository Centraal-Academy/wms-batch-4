const gulp = require("gulp");
const babel = require("gulp-babel");
const gulpUtil = require("gulp-util");
const sass = require('gulp-sass');

gulp.task("default" ,["js","sass"], function(){
    console.log("Is done")
})

gulp.task("js" , function(){
    return gulp.src("./src/**/*.js")
    .pipe(babel())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest("./public/"))
})

gulp.task("sass" , function() {
    return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
})
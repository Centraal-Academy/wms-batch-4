const gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer'),

    browserSync = require('browser-sync').create();


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./src/*.scss', ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("src/*.scss")
        .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: true
        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});


gulp.task('babel', function () {
    return gulp.src(['./src/**/*.babel'])
    .pipe(babel ({}))
    .pipe(gulp.dest('./build/'))
})

gulp.task('default', ['pug', 'sass','babel'], function () {
    console.log('process finished')
})

gulp.task('default', ['serve']);
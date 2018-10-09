var gulp = require('gulp'),
    jade = require('gulp-jade'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),

    browserSync = require('browser-sync').create();


//Environment 
gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = 'development';
});
    
gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = 'production';
});

gulp.task('build_for_prod', ['set-prod-node-env'], function(){
    config.paths.src.scripts = config.paths.deploy.scripts;
    runSequence(
        'build',
        's3'
    );
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch('./src/*.scss', ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('pug', function () {
    gulp.src("./*.pug")
    .pipe(pug())
    .pipe(autoprefixer({
        browsers:['last 3 versions']
    }))
    .pipe(gulp.dest('./build/'))
})

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
    return gulp.src(['./src/**/*.babel',
    uglify()])
    .pipe(browserify({ debug: true }))
    .pipe(babel ({}))
    .pipe(gulp.dest('./build/'))
})

gulp.task('default', ['pug', 'sass','babel'], function () {
    console.log('process finished')
})

gulp.task('default', ['serve']);

//

gulp.task('jade', function() {
    return gulp.src('src/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build/'));
});

// gulp.task('js', function() {
//     return gulp.src('src/js/main.js')
//         .pipe(browserify({ debug: true }))
//         .pipe(gulp.dest('build/development/js'));
// });
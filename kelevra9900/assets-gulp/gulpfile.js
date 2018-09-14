const gulp = require('gulp'),

//Plugins
  imagemin = require('gulp-imagemin'),
  imageResize = require('gulp-image-resize'),
  browserSync = require('browser-sync').create();


gulp.task('serve', function() {

  browserSync.init({
      server: "./"
  });
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('compress-images', function () {
    return gulp.src('src/assets/*')
    .pipe(imagemin({
        progressive:true, optimizationLevel: 10}))
        .pipe(gulp.dest('build/compress-img'));
});

gulp.task('image-resize', function () {
    return gulp.src('src/assets/*')
      .pipe(imageResize({
        width : 100,
        height : 100,
        crop : true,
        upscale : false
      }))
      .pipe(gulp.dest('build/min/img'));
  });
  

  gulp.task('default', ['compress-images', 'resize-images'], function () {
    console.log('process finished')
})

  gulp.task('default', ['serve']);
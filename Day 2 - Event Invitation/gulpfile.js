var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');

gulp.task('sass', function () {  
  gulp.src('css/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {  
  browserSync.init(["css/*.css", "js/*.js"], {
    server: {
      baseDir: "./"
      }
    });
  gulp.watch("css/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('default', ['sass', 'browser-sync']);

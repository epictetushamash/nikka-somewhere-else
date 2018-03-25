var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssbeautify = require('gulp-cssbeautify'),
    browserSync = require('browser-sync').create();

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['assets/scss/bootstrap.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

// Auto add browser vendor prefix & beautify
gulp.task('prefix', ['sass'], function() {
    return gulp.src(['assets/css/*.css'])
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'not ie <= 10'],
            cascade: false
        }))
        .pipe(cssbeautify({
            autosemicolon: true
        }))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('default',['prefix']);
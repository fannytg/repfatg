var gulp = require('gulp');
    concat = require('gulp-concat'),
	uglify = require('gulp-uglify');
var cssmin = require('./');
var rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('./sample/type.css')
        .pipe(cssmin())
				.pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./sample'));
});

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('source/js/*.js')
		.pipe(concat('lab40.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dest/'))
});
var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');
var gutil = require('gulp-util');

var onError = function (err) {  
	gutil.beep();
	console.log(err);
};

gulp.task('default', function () {
	gulp.src('./jade/*.jade')
		.pipe(watch(function(files){
			return files.pipe(plumber({ errorHandler: onError })).pipe( jade({ pretty: true }) ).pipe( gulp.dest('./public/') );
		}));

	gulp.src('./stylus/*.styl')
		.pipe(watch(function(files){
			return files.pipe(plumber({ errorHandler: onError })).pipe( stylus() ).pipe( gulp.dest('./public/css/') );
		}));

	var connect = require('connect');
	connect.createServer(
		connect.static(__dirname)
	).listen(8080);
});
var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var connect = require('connect');

gulp.task('default', function () {
	gulp.src('./jade/*.jade')
		.pipe(watch(function(files){
			return files.pipe( jade({ pretty: true }) )
						.pipe( gulp.dest('./public/') );
		}));

	gulp.src('./stylus/*.styl')
		.pipe(watch(function(files){
			return files.pipe( stylus() )
						.pipe( gulp.dest('./public/css/') );
		}));
});

connect.createServer(
	connect.static(__dirname)
).listen(8080);
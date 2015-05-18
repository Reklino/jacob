var gulp 			= require('gulp'),
	autoprefixer 	= require('gulp-autoprefixer'),
	sass			= require('gulp-sass'),
	browserSync 	= require('browser-sync').create(),
	reload      	= browserSync.reload;

gulp.task('sass', function() {
	return gulp.src('sass/*.scss')
		.pipe(sass({
			includePaths: [
				'node_modules/susy/sass'
			]
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))
		.pipe(reload({stream: true}));
})

gulp.task('watch', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('sass/*.scss', ['sass']);
	gulp.watch('**/*.js').on('change', reload);
	gulp.watch('*.html').on('change', reload);
})

gulp.task('default', ['sass', 'watch']);
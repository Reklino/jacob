var gulp 			= require('gulp'),
	autoprefixer 	= require('gulp-autoprefixer'),
	sass			= require('gulp-sass'),
	browserSync 	= require('browser-sync').create(),
	reload      	= browserSync.reload,
	svgstore		= require('gulp-svgstore'),
	inject 			= require('gulp-inject');

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

gulp.task('svgstore', function() {

	var svgs = gulp
       .src('svg/*.svg')
       .pipe(svgstore({ inlineSvg: true }));

   function fileContents (filePath, file) {
       return file.contents.toString();
   }

   return gulp
       .src('index.html')
       .pipe(inject(svgs, { transform: fileContents }))
       .pipe(gulp.dest('./'));

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
	gulp.watch('svg/*.svg', ['svgstore']).on('change', reload);
})

gulp.task('default', ['sass', 'svgstore', 'watch']);
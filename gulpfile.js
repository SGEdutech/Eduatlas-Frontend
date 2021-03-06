const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');
const gutil = require('gulp-util');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');

gulp.task('minify', () =>
	gulp.src('*.html')
	.pipe(useref())
	.pipe(gulpIf('*.js', babel({ presets: ['env'], compact: false })))
	.pipe(gulpIf('*.js', uglify()))
	.on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
	.pipe(gulp.dest('dist'))
);

gulp.task('imageMin', () =>
	gulp.src('assets/img/*')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
);

gulp.task('templates', () => {
	return gulp.src('templates/*.hbs')
		.pipe(handlebars())
		.pipe(wrap('Handlebars.template(<%= contents %>)'))
		.pipe(declare({
			namespace: 'template',
			noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe(concat('templates.js'))
		.pipe(gulp.dest('assets/js/'));
});

gulp.task('watch', () => {
	// gulp.watch('*.html', ['minify']);
	// gulp.watch('assets/img/*', ['imageMin']);
	gulp.watch('templates/*.hbs', ['templates']);
});

gulp.task('default', ['minify', 'imageMin', 'templates', 'watch']);

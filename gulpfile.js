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
        .pipe(gulpIf('*.js', babel({presets: ['env']})))
        .pipe(gulpIf('*.js', uglify()))
        .on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
        .pipe(gulp.dest('dist'))
);

gulp.task('imageMin', () =>
    gulp.src('assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('templates', function(){
    gulp.src('templates/*.handlebars')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'template',
            noRedeclare: true, // Avoid duplicate declarations
        }))
        .pipe(gulp.dest('assets/js/compiledTemplates/'));
});

gulp.task('watch', () => {
    gulp.watch('*.html', ['minify']);
    gulp.watch('assets/img/*', ['imageMin']);
    gulp.watch('template/*.handlebars', ['templates']);
});

gulp.task('default', ['minify', 'imageMin', 'templates', 'watch']);
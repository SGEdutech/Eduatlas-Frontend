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
    gulp.src('src/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', babel({presets: ['env']})))
        .pipe(gulpIf('*.js', uglify()))
        .on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
        .pipe(gulp.dest('dist'))
);

gulp.task('imageMin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('watch', () => {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/*.html', ['copyHtml']);
});

gulp.task('templates', function(){
    gulp.src('src/templates/*.hbs')
        .pipe(handlebars())
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            namespace: 'template',
            noRedeclare: true, // Avoid duplicate declarations
        }))
        // .pipe(concat('templates.js'))
        .pipe(gulp.dest('src/js/compiledTemplates/'));
});

// gulp.task('default', ['copyHtml', 'imageMin', 'scripts', 'watch']);

gulp.task('default', ['minify', 'imageMin', 'templates']);
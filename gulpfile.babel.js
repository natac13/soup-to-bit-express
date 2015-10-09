import gulp  from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import del from 'del';

gulp.task('es6', () => {
    gulp.src('app/src/*.js')
        .pipe(plumber())
        .pipe(babel({
            ignore: 'gulpfile.babel.js'
        }))
        .pipe(gulp.dest('app/'));
});

gulp.task('testES6', () => {
    gulp.src('app/tests/src/*.js')
    .pipe(plumber())
    .pipe(babel())
    .pipe(gulp.dest('app/tests'))
});

gulp.task('del', () => {
    del('app/*.js');
    del('app/tests/*.js');
});

gulp.task('watch', () => {
    gulp.watch('app/src/*.js', ['es6']);
    gulp.watch('app/tests/src/*.js', ['testES6']);
});

gulp.task('default', ['del', 'es6', 'testES6', 'watch']);
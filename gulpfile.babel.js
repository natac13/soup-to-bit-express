import gulp  from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';

gulp.task('es6', () => {
    gulp.src('app/*.js')
        .pipe(plumber())
        .pipe(babel({
            ignore: 'gulpfile.babel.js'
        }))
        .pipe(gulp.dest('app/dist'));
});

gulp.task('watch', () => {
    gulp.watch('app/*.js', ['es6']);
});

gulp.task('default', ['es6', 'watch']);
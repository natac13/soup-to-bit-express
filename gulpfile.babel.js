import gulp  from 'gulp';
import babel from 'gulp-babel';
import bab from 'babel/register';
import mocha from 'gulp-mocha';
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

// gulp.task('testES6', () => {
//     gulp.src('app/tests/src/*.js')
//     .pipe(plumber())
//     .pipe(babel())
//     .pipe(gulp.dest('app/tests'));
// });

// gulp.task('del', () => {
//     del('app/*.js');
//     del('app/tests/*.js');
// });

gulp.task('watch', () => {
    gulp.watch('app/src/*.js', ['es6', 'mocha']);
    gulp.watch('app/tests/*.js', ['mocha']);
});

gulp.task('mocha', () => {
    return gulp.src(['app/tests/test.js'], {read: false})
        .pipe(mocha({
            compilers: {
                js: bab
            }
        }));
});
// NEED TO FIND OUT HOW TO NOT HAVE TO SAVE TWICE TO HAVE THE TEST PASS

gulp.task('default', ['es6', 'watch', 'mocha']);
const gulp = require('gulp');
const zip = require('gulp-zip');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');

const zipper = (name) => gulp.src([`${name}/*.js`, 'node_modules/**', 'package.json'], { base : "." })
  .pipe(gulpif(`${name}/*.js`, rename((path) => path.dirname = '')))
  .pipe(zip(`${name}.zip`, {base: './source/'}))
  .pipe(gulp.dest('build'));

gulp.task('zip:post/spot:spot', () => zipper('post/spot'));

gulp.task('zip:get/spot:spot', () => zipper('get/spot'));

gulp.task('zip', [
  'zip:get/spot:spot',
  'zip:post/spot:spot',
]);
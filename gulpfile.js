const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImg(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJS(){
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/*.scss')
    .pipe(sourceMaps.init())
    .pipe(sass())
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

exports.default = function(){
    gulp.watch('./source/styles/*.scss',{ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/scripts/*.js',{ignoreInitial: false}, gulp.series(comprimeJS));
    gulp.watch('./source/images/*',{ignoreInitial: false}, gulp.series(comprimeImg));
}

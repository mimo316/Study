const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')


function transaformacaoSass() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copyHtml(cb) {

    gulp.src('index.html')
    .pipe(gulp.dest('build/'))

    return cb()

}

exports.default =  series(transaformacaoSass, copyHtml)
const { series, parallel } = require('gulp')

const gulp = require ('gulp')

const {appCss,appHtml,appIMG,appJS} = require('./gulpTasks/app')
const {despCSS, depsFonts} = require('./gulpTasks/deps')
const { monitorarArquivos, servidor} = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHtml,appCss,appJS, appIMG),
        series(despCSS,depsFonts)
    ),
    servidor,
    monitorarArquivos
)
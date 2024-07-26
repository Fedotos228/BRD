import gulp from 'gulp'
import { path, rootFolder } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    rootFolder: rootFolder,
    gulp: gulp,
    plugins: plugins,
}

import { copy } from './gulp/tasks/copy.js'
import { fontsStyle, otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js'
import { ftp } from './gulp/tasks/ftp.js'
import { html } from './gulp/tasks/html.js'
import { images } from './gulp/tasks/images.js'
import { js } from './gulp/tasks/js.js'
import { reset } from './gulp/tasks/reset.js'
import { scss } from './gulp/tasks/scss.js'
import { server } from './gulp/tasks/server.js'
import { zip } from './gulp/tasks/zip.js'


function watcher() {
    gulp.watch(path.watch.files, copy)
    // DACA VREI CA CAND FACI MODIFICARI AUTOMAT SA SE SCHIMBE SI PE SERVER(ASA LA TOATE)
    // gulp.watch(path.watch.html, gulp.series(html, ftp)); 
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(app.path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZIP = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

export { build, deployFTP, deployZIP, dev }


gulp.task('default', dev)
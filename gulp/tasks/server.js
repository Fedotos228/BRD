import browserSync from 'browser-sync'

export const server = (done) => {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        notify: false,
        port: 3000,
    })
    done()
}

export const reload = (done) => {
    browserSync.reload()
    done()
}

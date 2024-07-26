import autoprefixer from 'autoprefixer' // Ensure you're importing the actual autoprefixer package
import cleanCss from 'gulp-clean-css'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import postcss from 'gulp-postcss'
import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import webpcss from 'gulp-webpcss'
import dartSass from 'sass'
import tailwindcss from 'tailwindcss'

const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            postcss([
                tailwindcss(),
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ['last 3 versions'],
                    cascade: true
                })
            ])
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                groupCssMediaQueries()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss({
                    webpClass: '.webp',
                    noWebpClass: '.no-webp',
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.if(
                app.isBuild,
                cleanCss()
            )
        )
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}

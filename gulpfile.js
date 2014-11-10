var gulp = require('gulp'),
    connect = require('gulp-connect'),
    historyApiFallback = require('connect-history-api-fallback'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    protractor = require('gulp-protractor').protractor,
    watch = require('gulp-watch'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

//  ----------------------------------------------
//  Development
//  ----------------------------------------------

gulp.task('browser-sync', function() {
    var files = [
        'dev/*.html',
        'dev/views/*.html',
        'dev/css/*.css',
        'dev/js/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './dev'
        }
    });
});

gulp.task('default', ['browser-sync'], function() 
{
    //  Watch CSS files
    watch('./dev/stylus/*.styl', function()
    {
        gulp.src('./dev/stylus/*.styl')
        .pipe(stylus({ use: nib() }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dev/css'))
        .pipe(reload({stream:true}));
    });

    //  Watch JS files
    watch('./dev/js/*.js', function()
    {
        return gulp.src('./dev/js/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'));
    });

    //  Watch end-to-end tests
    watch('./test/testBrowser.js', function()
    {
        gulp.src(["./src/tests/*.js"])
        .pipe(protractor({
            configFile: "./test/conf.js",
            args: ['--baseUrl', 'http://localhost:3000']
        })) 
        .on('error', function(e) { throw e });
    });
});

//  ----------------------------------------------
//  Production
//  ----------------------------------------------

//  CSS is already minified, so just concat and copy
gulp.task('copy-css', function()
{
    gulp.src('./dev/css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./prod/css'));
});

//  Copy HTML to production
gulp.task('copy-html', function()
{
    gulp.src('./dev/*.html')
    .pipe(gulp.dest('./prod'));
});

//  Build js
gulp.task('build-js', function()
{
    return gulp.src('./dev/js/*.js')
           .pipe(uglify())
           .pipe(concat('app.js'))
           .pipe(gulp.dest('./prod/js'));
});

//  Start production server
gulp.task('start-prod-server', function()
{
    connect.server({
        root: './prod',
        hostname: '0.0.0.0',
        port: 8080,
        middleware: function(connect, opt) {
            return [ historyApiFallback ];
        }
    });
});

//  Build to production
gulp.task('build', ['copy-css', 'copy-html', 'build-js', 'start-prod-server']);

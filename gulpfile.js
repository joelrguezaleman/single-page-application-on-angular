var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    protractor = require('gulp-protractor').protractor,
    watch = require('gulp-watch'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    minifyHTML = require('gulp-minify-html'),
    optipng = require('imagemin-optipng'),
    jpegtran = require('imagemin-jpegtran'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css');

//  ----------------------------------------------
//  Development
//  ----------------------------------------------

gulp.task('browser-sync', function() {
    var files = [
        'dev/index.html',
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
        .pipe(concat('main.css'))
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

//  CSS is already minified, so just copy
gulp.task('copy-css', function()
{
    gulp.src('./dev/css/*.css')
    .pipe(gulp.dest('./prod/css'));
});

//  Copy JSON files
gulp.task('copy-json', function()
{
    gulp.src('./dev/data/*.json')
    .pipe(gulp.dest('./prod/data'));
});

//  Build compressed HTML
gulp.task('build-html', function()
{
    gulp.src('./dev/index.html')
        .pipe(minifyHTML( {empty:true} ))
        .pipe(gulp.dest('./prod'));

    gulp.src('./dev/views/*.html')
        .pipe(minifyHTML( {empty:true} ))
        .pipe(gulp.dest('./prod/views'));
});

//  Build compressed images
gulp.task('build-png', function () {
    gulp.src('./dev/img/*.png')
        .pipe(optipng({ optimizationLevel: 3 })())
        .pipe(gulp.dest('./prod/img'));
});
gulp.task('build-jpg', function () {
    gulp.src('./dev/img/*.jpg')
        .pipe(jpegtran({ progressive: true })())
        .pipe(gulp.dest('./prod/img'));
});
gulp.task('build-images', ['build-png', 'build-jpg']);

//  Build compressed js
gulp.task('build-js', function()
{
    gulp.src('./dev/js/*.js')
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
        port: 8080
    });
});

//  Build to production
gulp.task('build', ['copy-css', 'copy-json', 'build-html', 'build-images', 'build-js', 'start-prod-server']);

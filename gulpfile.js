/**
*@file gulp
*/
// require
var pwd = __dirname;
var gulp = require('gulp');
var connect = require('gulp-connect');
var ejs = require('gulp-ejs');
var util = require('gulp-util');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minicss = require('gulp-minify-css');
var minihtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var sourcemap = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var fs = require('fs');
var path = require('path');
var widget = require(pwd + '/engine/widget.js');

// path
var filepath = 'output/template/';
var assetpath = 'output/assets/';
var assetstylepath = 'output/assets/style/widget';
var assetscriptpath = 'output/assets/script/widget';
var assetstemplatepath = 'output/template/widget';
var sassfilepath_lib  = ['assets/**/*.scss', 'assets/**/*.css'];
var templatepath = ['template/**/*.ejs'];
var widgetpath = 'widget/';
var jspath_lib = ['assets/**/*.js'];
var replacefilepath = 'output/template/**/*.html';

// minipath
var ministylepath = 'output/assets/style/**/*.css';
var miniscriptpath = 'output/assets/script/**/*.js';
var minihtmlpath = 'output/template/**/*.html';

// fn
function getFolders (dir) {
    return fs.readdirSync(dir)
           .filter(function (file) {
                return fs.statSync(path.join(dir, file)).isDirectory();
           });
}


// task
gulp.task('compile:sass', function () {
    var folders = getFolders(widgetpath);
    var stream_w = folders.map(function (folder) {
        return gulp.src(path.join(widgetpath, folder, '/*.scss'))
                   .pipe(concat(folder + '.scss'))
                   .pipe(sass())
                   .on('error', util.log)
                   .pipe(gulp.dest(assetstylepath));
    });
    
    var stream = gulp.src(sassfilepath_lib)
        .pipe(sass())
        .on('error', util.log)
        .pipe(gulp.dest(assetpath));

    return stream_w && stream;
});

gulp.task('compile:ejs', function () {
    var folders = getFolders(widgetpath);
    var stream_w = folders.map(function (folder) {
        return gulp.src(path.join(widgetpath, folder, '/*.ejs'))
                   .pipe(concat(folder + '.ejs'))
                   .pipe(ejs())
                   .on('error', util.log)
                   .pipe(gulp.dest(assetstemplatepath));
    });

    var stream = gulp.src(templatepath)
        .pipe(ejs())
        .on('error', util.log)
        .pipe(gulp.dest(filepath));
    
    return stream_w && stream;
});

gulp.task('compile:js', function () {
    var folders = getFolders(widgetpath);
    var stream_w = folders.map(function (folder) {
        return gulp.src(path.join(widgetpath, folder, '/*.js'))
                   .pipe(concat(folder + '.js'))
                   .pipe(gulp.dest(assetscriptpath));
    });

    var stream = gulp.src(jspath_lib)
        .pipe(gulp.dest(assetpath));

    return stream_w && stream;
});

gulp.task('replace:style', ['compile:ejs','compile:sass','compile:js'], function () {
    var stream = gulp.src(replacefilepath)
        .pipe(replace(/(<!--resstyle\[)(\S+)(\.\w+\]-->)/gi, '<link type="text/css" rel="stylesheet" href="$2.css"/>'))
        .pipe(gulp.dest(filepath));
    return stream;
});

gulp.task('replace:script', ['replace:style'], function () {
    var stream = gulp.src(replacefilepath)
        .pipe(replace(/(<!--resscript\[)(\S+)(\.\w+\]-->)/gi, '<script type="text/javascript" src="$2.js"></script>'))
        .pipe(gulp.dest(filepath));
    return stream;
});

gulp.task('compile:widget', ['replace:script'], function () {
    var stream = gulp.src(replacefilepath)
        .pipe(widget({
             skipjs: true
         }))
        .pipe(gulp.dest(filepath));
    return stream;
});

gulp.task('mini:css', ['compile:widget'], function () {
    gulp.src(ministylepath)
        .pipe(minicss())
        .pipe(gulp.dest('output/assets/style/'));
});

gulp.task('mini:js', ['compile:widget'], function () {
    gulp.src(miniscriptpath)
        .pipe(uglify())
        .pipe(gulp.dest('output/assets/script/'));
});

gulp.task('mini:html', ['compile:widget'], function () {
    gulp.src(minihtmlpath)
        .pipe(minihtml())
        .pipe(gulp.dest('output/template/'));
});

gulp.task('cp:img', function () {
    gulp.src(['assets/img/**/*.png', 'assets/img/**/*.ico'])
        .pipe(gulp.dest('output/assets/img'));
});

gulp.task('watch:file', function () {
    gulp.watch(['widget/**/*.js', 'widget/**/*.scss', 'widget/**/*.ejs'], ['compile:js', 'compile:sass', 'compile:widget', 'cp:img']);
    gulp.watch(sassfilepath_lib, ['compile:sass', 'cp:img']);
    gulp.watch(jspath_lib, ['compile:js', 'cp:img']);
    gulp.watch(templatepath, ['compile:ejs', 'replace:style', 'replace:script', 'compile:widget', 'cp:img']);  
});

gulp.task('start:server', function () {
    connect.server({
        root: 'output/',
        port: 8888,
        livereload: true
    })
});

// run task
gulp.task('dev', ['compile:sass', 'compile:ejs', 'compile:js', 'replace:style', 'replace:script', 'compile:widget', 'cp:img','watch:file', 'start:server']);

gulp.task('build', ['compile:sass', 'compile:ejs', 'compile:js', 'replace:style', 'replace:script', 'compile:widget', 'cp:img', 'mini:css', 'mini:html', 'start:server']);

gulp.task('imagemin', function () {
    gulp.src(['assets/img/**/*.png'])         
        .pipe(imagemin())         
        .pipe(gulp.dest('output/assets/img'));
});
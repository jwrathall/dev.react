"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open'); //open url in browser
var browserify = require('browserify'); //js bundler
var reactify = require('reactify'); //transform jsx to js
var source = require('vinyl-source-stream'); //use conventional text streams with gulp
var concat = require('gulp-concat');
var lint = require('gulp-eslint'); //lint js files, including jsx

var config = {
    port: 3000,
    devBaseUrl: 'http://localhost',
    paths:{
        html:'./src/*.html',
        dist: './dist',
        js: './src/**/*.js',
        css:[
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
          'node_modules/toastr/build/toastr.css',
        ],
        mainJs: './src/main.js',
        images:'./src/images/*'
    }
}

//start local server

gulp.task('connect', function(){
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    })
});

gulp.task('open',['connect'],function(){
   gulp.src('dist/index.html')
    .pipe(open({uri: config.devBaseUrl+':'+config.port+'/'}));
});

gulp.task('html', function(){
   gulp.src(config.paths.html)
   .pipe(gulp.dest(config.paths.dist))
   .pipe(connect.reload());
});

gulp.task('js',function(){
   browserify(config.paths.mainJs)
    .transform(reactify)//transform javascript using reactify
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());

});
gulp.task('css',function(){
  gulp.src(config.paths.css)
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images',function(){
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

});

gulp.task('lint',function(){
  return gulp.src(config.paths.js)
  .pipe(lint({config: 'eslint.config.json'}))
  .pipe(lint.format());
});

gulp.task('watch',function(){
   gulp.watch(config.paths.html,['html']);
   gulp.watch(config.paths.js,['js']);
});

gulp.task('default',['html','js', 'css','images','open','watch']);

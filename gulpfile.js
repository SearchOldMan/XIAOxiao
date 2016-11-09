

'use strict'; //严格模式

/*
    1.less文件的拷贝，压缩；
    2.混淆；
    3.img复制
    4.html压缩
*/

var gulp = require('gulp'); 
var less = require('gulp-less');  //编译less文件
var cssnano = require('gulp-cssnano');//压缩css文件

var concat = require('gulp-concat');  //合并文件

var uglify = require('gulp-uglify');

var htmlmin = require('gulp-htmlmin');

//1.less文件的拷贝，压缩；
gulp.task('style',function(){

    gulp.src('src/style/*.less')
        .pipe(less())  //执行less
        .pipe(cssnano()) //压缩css文件
        .pipe(gulp.dest('dist/styles'));  //目标位置
});


//2.合并，压缩，混淆；

gulp.task('script',function(){
    gulp.src('src/script/index.js')
        .pipe(concat('all.js'))  //合并到哪个文件下
        .pipe(uglify())
        .pipe(gulp.dest('dist/script'));
});


//3.img复制
gulp.task('image',function(){
    gulp.src('src/image/*.*')
        .pipe(gulp.dest('dist/images'));
});

//4.html压缩 
gulp.task('html',function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist/htmls'));
});
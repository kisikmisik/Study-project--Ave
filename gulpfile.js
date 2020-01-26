"use strict";
var gulp      = require('gulp'), // Подключаем Gulp
    less        = require('gulp-less'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('less', function(){ // Создаем таск Sass
    return gulp.src('app/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function() {
    gulp.watch('app/less/**/*.less', gulp.parallel('less')); // Наблюдение за sass файлами
});
gulp.task('default', gulp.parallel('less', 'browser-sync', 'watch'));


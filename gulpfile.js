var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAWbJAYPC34wIZ-dadHOK86S4Xyewty4O0",
  authDomain: "motdb-47432.firebaseapp.com",
  databaseURL: "https://motdb-47432.firebaseio.com",
  projectId: "motdb-47432",
  storageBucket: "motdb-47432.appspot.com",
  messagingSenderId: "82794074640"
};

firebase.initializeApp(config);


var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(cleanCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(paths.sass, ['sass']);
});

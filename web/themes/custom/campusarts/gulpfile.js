const gulp = require('gulp'),
	  sass = require('gulp-sass'),
	  browserSync = require('browser-sync').create(),
	  autoprefixer = require('gulp-autoprefixer'),
	  sourcemaps = require('gulp-sourcemaps');

//compile scss to css
function css(){
	return gulp.src('./scss/*.scss')
	.pipe(sourcemaps.init())
	.pipe(sass({
		outputStyle: 'expanded',
	}))
	.pipe(autoprefixer('last 2 versions'))
	.on('error', function (err) {
      console.log(err.message + ' on line ' + err.lineNumber + ' in file : ' + err.fileName);
    })
    .pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream())
}

//compile js
// function js(){
//    gulp.src('src/*.js')
//         .pipe(babel({
//             presets: ['@babel/preset-env']
//         }))
// 		.pipe(gulp.dest('./js'))
// 		.pipe(browserSync.stream())
// 		.pipe(browserSync.reload())
// }

//watch for changes
function watch(){
	browserSync.init({
        proxy: "https://ub-campus-arts.lndo.site"
    });
	gulp.watch('./scss/**/*.scss', css);
	//gulp.watch('./src/**/*.js', js);
	gulp.watch('./*.scss').on('change', browserSync.reload);
}

exports.css = css;
//exports.js = js;
exports.watch = watch;

gulp.task('default', watch);


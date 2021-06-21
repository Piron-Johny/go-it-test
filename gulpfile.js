const fileinclude = require('gulp-file-include');
const { src, dest } = require('vinyl-fs');

project_folder = "dist";
source_folder ="#src";

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/"
  },
  src: {
    html: source_folde + "/",
    css: source_folde + "/scss/style.scss",
    js: source_folde + "/js/script.js",
    img: source_folde + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folde + "/fonts/*.ttf",
  },
  src: {
    html: source_folde + "/**/*.html",
    css: source_folde + "/scss/**/*.scss",
    js: source_folde + "/js/**/*.js",
    img: source_folde + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
  },
  clean: "/" + project_folder + "/"
}

let ( src, dest) =require('gulp'),
  gulp = require('gulp'),
  browsersync = require("browser-sync").create();
  fileinclude = require("gulp-file-include");

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "/" + project_folder + "/"
    },
    port: 3000,
    notify: false,
  })
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(dest(build.path.html))
    .pipe(browsersync.stream())
}
function watchFiles(params){
  gulp.watch([path.watch.html], html);
}

let build  = gulp.series(html);
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;



//Досмотрел до 32:50 https://www.youtube.com/watch?v=stFOy0Noahg
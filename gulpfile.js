const gulp = require("gulp");
const del = require("del");
const server = require("browser-sync").create();
const htmlclean = require("gulp-htmlclean");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass");
const prefix = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");

/////////////////////////////////////////////////////////////////////////////////////////////
// DEVELOPMENT
gulp.task("sass", () => {
  gulp
    .src("src/scss/*.scss")
    .pipe(sass().on("error", e => console.log(e)))
    .pipe(gulp.dest("src/css"))
    .pipe(server.stream());
});

gulp.task("serve", ["sass"], () => {
  server.init({
    server: {
      baseDir: "src"
    }
  });

  gulp.watch(["src/scss/**/*.scss"], ["sass"]);
  gulp.watch(["src/index.html", "src/script/**"]).on("change", server.reload);
});

gulp.task("default", ["serve"]);

/////////////////////////////////////////////////////////////////////////////////////////////
// PRODUCTION
gulp.task("dist:css", () => {
  gulp
    .src("src/scss/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(gulp.dest("dist/css"));
});

gulp.task("dist:html", () => {
  gulp
    .src("src/index.html")
    .pipe(htmlclean())
    .pipe(gulp.dest("dist"));
});

gulp.task("dist:images", () =>
  gulp.src("src/images/**").pipe(gulp.dest("dist/images/"))
);

gulp.task("dist:js", () =>
  gulp
    .src("src/script/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/script/"))
);

gulp.task("build", ["dist:html", "dist:css", "dist:js", "dist:images"]);

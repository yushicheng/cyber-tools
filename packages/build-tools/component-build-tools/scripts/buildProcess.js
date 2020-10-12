const gulp = require("gulp");
const path = require("path");
const merge = require("merge2");
const babel = require("gulp-babel");
const typescript = require("gulp-typescript");

const runtimeBabelConfig = require("@/configs/runtimeBabelConfig");
const output = path.join(process.cwd(), "./dist/");


module.exports = async function buildProcess() {
  const tsProject = typescript.createProject("tsconfig.json");
  const gulpMatch = tsProject.src();
  const tsTask = gulpMatch.pipe(tsProject());
  const jsTask = tsTask.js.pipe(babel(runtimeBabelConfig)).pipe(gulp.dest(output));
  const dtsTask = tsTask.dts.pipe(gulp.dest(output));
  return merge([jsTask, dtsTask]);
};
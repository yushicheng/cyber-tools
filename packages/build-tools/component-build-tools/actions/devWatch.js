// 为什么是这样使用的请案例参考:
// https://github.com/ant-design/antd-tools/blob/master/lib/cli/run.js
const gulp = require("gulp");
const path = require("path");
const watch = require("gulp-watch");
const buildProcess = require("@/scripts/buildProcess");

module.exports = async () => {
  gulp.task("start:build", buildProcess);
  gulp.task("watch:dev", function () {
    const watchPath = path.resolve(process.cwd(), "./src/**/*");
    return watch(watchPath, buildProcess);
  });
  await gulp.task("start:build").apply(gulp);
  await gulp.task("watch:dev").apply(gulp);
};
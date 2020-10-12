// 为什么是这样使用的请案例参考:
// https://github.com/ant-design/antd-tools/blob/master/lib/cli/run.js
const gulp = require("gulp");
const buildProcess = require("@/scripts/buildProcess");

module.exports = async () => {
  gulp.task("build", buildProcess);
  await gulp.task("build").apply(gulp);
};

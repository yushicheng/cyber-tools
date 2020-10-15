const toast = require("@cyber-tools/cli-utils/toast");
const isInit = require("@cyber-tools/git-assess-utils/isInit");
const isChange = require("@cyber-tools/git-assess-utils/isChange");
const hasPackageJson = require("@cyber-tools/git-assess-utils/hasPackageJson");

const confirmInitial = require("@/scripts/confirm/confirmInitial");
const firstCommit = require("@/scripts/first-commit");

module.exports = async () => {
  if (!await hasPackageJson()) {
    toast.warn("当前项目文件没有package.json文件");
    process.exit(0);
  };
  if (!await isInit()) {
    if (!await confirmInitial()) {
      process.exit(0);
    } else {
      await firstCommit();
      process.exit(0);
    };
  }
  if (!await isChange()) {
    toast.warn("当前项目文件没有变动");
    process.exit(0);
  };
};
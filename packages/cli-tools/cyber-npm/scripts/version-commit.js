const git = require("simple-git")();
const toast = require("@cyber-tools/cli-utils/toast");
const hasRemote = require("@cyber-tools/git-assess-utils/hasRemote");
const hasIgnoreFile = require("@cyber-tools/git-assess-utils/hasIgnoreFile");

const { version } = require("@/package.json");


module.exports = async () => {
  if (!(await hasIgnoreFile())) {
    toast.warn("当前项目不存在.gitignore文件");
    process.exit(0);
  };
  try {
    await git.init();
    await git.add(".");
    await git.commit([version, "版本发布"].join(""));
    if (await hasRemote()) {
      await git.push();
    } else {
      toast.warn("没有检测到远程仓库!");
    };
  } catch (error) {
    throw error;
  };
};
const git = require("simple-git")();

const fastCommit = require("@/actions/fast-commit");
const toast = require("@cyber-tools/cli-utils/toast");
const hasIgnoreFile = require("@cyber-tools/git-assess-utils/hasIgnoreFile");

module.exports = async () => {
  if (await hasIgnoreFile()) {
    try {
      toast.start("正在解除... ...");
      await git.rm(["-r", "--cached", "."]);
      toast.succeed("解除成功!");
      await fastCommit();
    } catch (error) {
      toast.fail("重置失败!");
      throw error;
    }
  } else {
    toast.warn("该项目下不存在.gitignore文件");
  };
};
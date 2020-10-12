const git = require("simple-git")();
const prompt = require("prompt-promise");

const toast = require("@cyber-tools/cli-utils/toast");
const hasRemote = require("@cyber-tools/git-assess-utils/hasRemote");

module.exports = async () => {
  if (await hasRemote()) {
    try {
      await git.removeRemote("origin");
      const repoUrl = await prompt("新的远程仓库url:");
      await git.addRemote("origin", repoUrl);
      toast.succeed("remote更新成功!");
      toast.start("正在推送,请稍后... ...");
      await git.push("origin", {
        "--all": true,
        "--set-upstream": true
      });
      toast.succeed("推送成功!");
    } catch (error) {
      toast.fail("更新失败!");
      throw error;
    }
  } else {
    toast.warn("没有检测到远程仓库!");
  }
};

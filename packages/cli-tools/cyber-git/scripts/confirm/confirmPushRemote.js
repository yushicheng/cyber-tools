const git = require("simple-git")();

const toast = require("@cyber-tools/cli-utils/toast");
const popConfirm = require("@cyber-tools/cli-utils/popConfirm");
const hasRemote = require("@cyber-tools/git-assess-utils/hasRemote");

module.exports = async () => {
  if (await hasRemote()) {
    try {
      if (await popConfirm("是否推送到远程仓库?")) {
        toast.start("正在推送,请稍后...");
        await git.push();
        toast.succeed("推送成功!");
      };
    } catch (error) {
      throw error;
    }
  } else {
    toast.warn("没有检测到远程仓库!");
  };
};
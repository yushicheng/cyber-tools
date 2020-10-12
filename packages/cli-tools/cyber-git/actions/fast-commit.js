const git = require("simple-git")();

const toast = require("@cyber-tools/cli-utils/toast");
const hasIgnoreFile = require("@cyber-tools/git-assess-utils/hasIgnoreFile");

const currentPreset = require("@cyber-tools/preset-git-comment-cyber");
const selectSingleType = require("@/scripts/select/selectSingleType");
const confirmPushRemote = require("@/scripts/confirm/confirmPushRemote");


module.exports = async () => {
  try {
    if (!await hasIgnoreFile()) {
      return toast.warn("该项目下不存在.gitignore文件");
    };
    await git.add(".");
    const commitType = await selectSingleType();
    const commitMessage = await currentPreset[commitType]();
    toast.start("正在提交");
    await git.commit(commitMessage);
    toast.succeed("提交成功!");
    await confirmPushRemote();
    process.exit(0);
  } catch (error) {
    toast.fail("提交失败!");
    throw error;
  };
};
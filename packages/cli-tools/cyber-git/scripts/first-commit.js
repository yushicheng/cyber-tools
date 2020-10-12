const git = require("simple-git")();
const toast = require("@cyber-tools/cli-utils/toast");
const createInitMessage = require("@/scripts/specialMessage/createInitMessage");
const confirmPushRemote = require("@/scripts/confirm/confirmPushRemote");

module.exports = async () => {
  try {
    await git.init();
    await git.add(".");
    const commitMessage = await createInitMessage();
    toast.start("正在进行项目初始化提交");
    await git.commit(commitMessage);
    toast.succeed("项目初始化成功!");
    await confirmPushRemote();
  } catch (error) {
    throw error;
  };
};

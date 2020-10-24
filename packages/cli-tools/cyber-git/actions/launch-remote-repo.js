const open = require("open");
const gitRemoteOriginUrl = require('git-remote-origin-url');
const toast = require("@cyber-tools/cli-utils/toast");

module.exports = async () => {
  try {
    toast.start("查询git远程仓库,请稍后... ...");
    const remoteURL = await gitRemoteOriginUrl();
    await open(remoteURL);
    toast.succeed("complate!");
  } catch (error) {
    toast.fail("error!");
    throw error;
  }
};
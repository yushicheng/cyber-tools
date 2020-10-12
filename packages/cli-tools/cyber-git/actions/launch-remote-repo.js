const open = require("open");
const git = require("simple-git")();
const { fromPairs } = require("lodash");
const toast = require("@cyber-tools/cli-utils/toast");

module.exports = async () => {
  try {
    toast.start("查询git远程仓库,请稍后... ...");
    const list = await git.getRemotes(true);
    const remote = fromPairs(list.map(({ name, refs }) => [name, refs.push]));
    await open(remote["origin"]);
    toast.succeed("complate!");
  } catch (error) {
    toast.fail("error!");
    throw error;
  }
};
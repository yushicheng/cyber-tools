const path = require("path");
const open = require("open");
const npmName = require("npm-name");
const toast = require("@cyber-tools/cli-utils/toast");

module.exports = async () => {
  const jsonFilePath = path.join(process.cwd(), "package.json");
  const { name } = require(jsonFilePath);
  try {
    toast.start("查询包名中,请稍后... ...");
    if (await npmName(name)) {
      toast.warn(["包名", name, "不存在"].join(""));
    } else {
      await open(["https://www.npmjs.com", "package", name].join("/"));
      toast.succeed("complate!");
    };
  } catch (error) {
    toast.fail("error!");
    throw error;
  }
};
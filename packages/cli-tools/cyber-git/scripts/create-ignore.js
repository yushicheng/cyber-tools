const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");
const toast = require("@cyber-tools/cli-utils/toast");

const template = require("@/assets/gitignore-template");
const hasIgnoreFile = require("@cyber-tools/git-assess-utils/hasIgnoreFile");


module.exports = async () => {
  if (await hasIgnoreFile()) {
    toast.warn("该项目已存在.gitignore文件");
    return false;
  };
  try {
    toast.start("正在写入文件");
    const writeFilePath = path.join(process.cwd(), ".gitignore");
    await promisify(fs.writeFile)(writeFilePath, template);
    toast.succeed("写入成功!");
  } catch (error) {
    toast.fail("写入失败!");
    throw error;
  }
};
const fs = require("fs");
const ini = require("ini");
const path = require("path");
const { promisify } = require("es6-promisify");

const toast = require("@cyber-tools/cli-utils/toast");

const hasNpmrcFile = require("@/utils/hasNpmrcFile");
const selectNpmSource = require("@/utils/select-npm-source");

module.exports = async () => {
  if (await hasNpmrcFile()) {
    toast.warn("当前项目已经包含npmrc文件");
  } else {
    try {
      const writeFilePath = path.join(process.cwd(), ".npmrc");
      const source = await selectNpmSource();
      toast.start("正在创建文件,请稍后... ...");
      await promisify(fs.writeFile)(writeFilePath, ini.stringify(source));
      toast.succeed("创建成功!");
    } catch (error) {
      toast.succeed("创建失败!");
      throw error;
    }
  }
};
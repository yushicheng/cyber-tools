const fs = require("fs");
const path = require("path");
const pathExists = require("path-exists");
const { promisify } = require("es6-promisify");
const toast = require("@cyber-tools/cli-utils/toast");

module.exports = async () => {
  try {
    const configTemplate = path.resolve(__dirname, "../configs/cdn.config.js");
    const projectConfigPath = path.resolve(process.cwd(), "./cdn.config.js");
    if (await pathExists(projectConfigPath)) {
      toast.warn("项目中已经存在cdn.config.js文件!");
      process.exit(0);
    } else {
      toast.start("正在拷贝配置文件... ...");
      await promisify(fs.copyFile)(configTemplate, projectConfigPath);
      toast.succeed("初始化成功!");
    };
  } catch (error) {
    throw error;
  };
};
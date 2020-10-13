const path = require("path");
const toast = require("@cyber-tools/cli-utils/toast");
const hasFile = require("@cyber-tools/cli-utils/cwdHasFile");
const copyFile = require("@cyber-tools/cli-utils/copyFile");

module.exports = async () => {
  if (await hasFile("mock-server.config.js")) {
    toast.warn("mock-server.config.js已存在,已初始化");
    process.exit(0);
  };
  try {
    toast.start("正在创建配置文件");
    const configFilePath = path.resolve(__dirname, "../configs/mock-server.config.js");
    const targetFilePath = path.resolve(process.cwd(), "./mock-server.config.js");
    await copyFile({ source: configFilePath, target: targetFilePath }, false);
    toast.succeed("配置文件创建完成!");
  } catch (error) {
    throw error;
  };
};
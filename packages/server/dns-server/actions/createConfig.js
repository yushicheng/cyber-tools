const toast = require("@cyber-tools/cli-utils/toast");
const copyFile = require("@cyber-tools/cli-utils/copyFile");

module.exports = async () => {
  try {
    toast.start("正在创建配置文件");
    const configFilePath = path.resolve(__dirname, "../configs/dns.config.js");
    const targetFilePath = path.resolve(process.cwd(), "./dns.config.js");
    await copyFile({ source: configFilePath, target: targetFilePath }, false);
    toast.succeed("配置文件创建完成!");
  } catch (error) {
    throw error;
  };
};
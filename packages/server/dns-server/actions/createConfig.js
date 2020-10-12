const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

const toast = require("@cyber-tools/cli-utils/toast");

module.exports = async () => {
  try {
    toast.start("正在创建配置文件");
    const configFilePath = path.resolve(__dirname, "../configs/dns.config.js");
    const targetFilePath = path.resolve(process.cwd(), "./dns.config.js");
    await promisify(fs.copyFile)(configFilePath, targetFilePath);
    toast.succeed("配置文件创建完成!");
  } catch (error) {
    throw error;
  }
};
const fs = require("fs");
const { promisify } = require("es6-promisify");
const pathExists = require("path-exists");

const { SOURCE_CONFIG_PATH, CUSTMER_CONFIG_PATH } = require("@/configs/runtime.config");

module.exports = async () => {
  if (await pathExists(CUSTMER_CONFIG_PATH)) {
    console.log("配置文件已存在!");
  } else {
    await promisify(fs.copyFile)(SOURCE_CONFIG_PATH, CUSTMER_CONFIG_PATH);
    console.log("配置文件创建成功!");
  }
};
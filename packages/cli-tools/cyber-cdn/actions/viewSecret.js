const fs = require("fs");
const open = require("open");
const { promisify } = require("es6-promisify");

const toast = require("@cyber-tools/cli-utils/toast");
const { secretLocalFile } = require("@/configs/runtime.config");

module.exports = async () => {
  try {
    await promisify(fs.access)(secretLocalFile, fs.constants.F_OK | fs.constants.W_OK);
    await open(secretLocalFile);
  } catch (error) {
    if (error.code === "ENOENT") {
      toast.fail("登录信息不存在!");
    };
    throw error;
  }
};
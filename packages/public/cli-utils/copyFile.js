const fs = require("fs");
const { promisify } = require("es6-promisify");

const toast = require("./toast");

module.exports = async ({ source, target }, tip) => {
  try {
    tip ? toast.start("正在拷贝文件") : void (0);
    await promisify(fs.copyFile)(source, target);
    tip ? toast.succeed("拷贝成功!") : void (0);
  } catch (error) {
    tip ? toast.fail("拷贝失败!") : void (0);
    throw error;
  };
};
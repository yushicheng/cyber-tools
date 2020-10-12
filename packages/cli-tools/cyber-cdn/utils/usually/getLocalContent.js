const path = require("path");
const { readFile } = require("jsonfile");
const pathExists = require("path-exists");

const { localFileRecord } = require("@/configs/runtime.config");

// 获取当前文件夹下的file.oss.json文件
module.exports = async (currentPath) => {
  try {
    const localJsonFile = path.resolve(currentPath, localFileRecord);
    if (await pathExists(localJsonFile)) {
      const localContent = await readFile(localJsonFile);
      return localContent;
    } else {
      return {};
    };
  } catch (error) {
    throw error;
  };
};
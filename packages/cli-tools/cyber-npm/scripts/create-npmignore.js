const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

const toast = require("@cyber-tools/cli-utils/toast");
const hasNpmIgnoreFile = require("@/utils/hasNpmIgnoreFile");
const npmignoreTemplate = require("@/assets/npmignore-template");

module.exports = async () => {
  if (await hasNpmIgnoreFile()) {
    toast.warn("该项目下已存在.npmignore文件");
  } else {
    try {
      const npmignoreFilePath = path.join(process.cwd(), ".npmignore");
      await promisify(fs.writeFile)(npmignoreFilePath, npmignoreTemplate);
      toast.succeed("创建成功!");
    } catch (error) {
      toast.fail("创建失败!");
      throw error;
    };
  };
};
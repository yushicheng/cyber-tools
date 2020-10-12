const path = require("path");
const defaultConfig = require("@/configs/cdn.config.js");

// 获取合并后的cdn.config.js配置
module.exports = async () => {
  const configFileResolve = require.resolve("./cdn.config.js", {
    paths: [process.cwd(), path.resolve(__dirname, "../../configs/")]
  });
  const projectFileContent = require(configFileResolve);
  return { ...defaultConfig, ...projectFileContent };
};
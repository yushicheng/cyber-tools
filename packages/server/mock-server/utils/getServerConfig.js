const path = require("path");
const deepExtend = require("deep-extend");
const defaultConfig = require("@/configs/mock-server.config");

module.exports = async () => {
  const configFileResolve = require.resolve("./mock-server.config.js", {
    paths: [process.cwd(), path.resolve(__dirname, "../configs/")]
  });
  const customerConfig = require(configFileResolve);
  return deepExtend(defaultConfig, customerConfig);
};
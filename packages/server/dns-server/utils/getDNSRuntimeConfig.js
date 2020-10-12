const os=require("os");
const path = require("path");

module.exports = async (configFilePath) => {
  if (configFilePath) {
    const configResolve = require.resolve(configFilePath, {
      paths: [process.cwd()]
    });
    return require(configResolve);
  };
  const configResolve = require.resolve("./dns.config", {
    paths: [process.cwd(),os.homedir(), path.resolve(__dirname, "../configs/")]
  });
  return require(configResolve);
};

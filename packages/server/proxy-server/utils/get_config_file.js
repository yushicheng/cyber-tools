const pathExists = require("path-exists");

const default_config = require("@/configs/proxy.config.js");
const { CUSTMER_CONFIG_PATH } = require("@/configs/runtime.config");


module.exports = async () => {
  if (await pathExists(CUSTMER_CONFIG_PATH)) {
    const custmer_config = require(CUSTMER_CONFIG_PATH);
    return Object.assign({}, default_config, custmer_config);
  }
  return default_config;
};
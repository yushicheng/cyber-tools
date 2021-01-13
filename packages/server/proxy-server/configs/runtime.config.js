const path = require("path");


exports.SOURCE_CONFIG_PATH = path.resolve(__dirname, "../configs/proxy.config.js");
exports.CUSTMER_CONFIG_PATH = path.join(process.cwd(), "./proxy.config.js");
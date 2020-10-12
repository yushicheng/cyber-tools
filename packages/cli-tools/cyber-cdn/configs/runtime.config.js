const os = require("os");
const path = require("path");

exports.ACL = "public-read";
exports.Region = "ap-shanghai";
exports.StorageClass = "STANDARD";
exports.localFileRecord = "file.oss.json";
exports.secretLocalFile = path.resolve(os.homedir(), "./cdn.secret.json");
const popConfirm = require("@cyber-tools/cli-utils/popConfirm");

module.exports = async () => await popConfirm("检测到该项目没有被git初始化,是否进行初始化");
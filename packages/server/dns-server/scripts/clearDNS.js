// 更改系统DNS设置请参考 https://blog.csdn.net/snowrain1108/article/details/51734553
const execa = require("execa");
const isWindows = require("is-windows");
const toast = require("@cyber-tools/cli-utils/toast");

module.exports = async () => {
  try {
    if (isWindows()) {
      return console.log("windows 平台暂时不支持系统自动设置");
    };
    toast.start("正在移除DNS服务器");
    await execa("networksetup", ["-setdnsservers", "Wi-Fi", "empty"]);
    toast.succeed("DNS服务器配置清空完成");
    toast.start("正在刷新DNS缓存");
    await execa("dscacheutil", ["-flushcache"]);
    toast.succeed("DNS缓存已清空");
  } catch (error) {
    throw error;
  };
};
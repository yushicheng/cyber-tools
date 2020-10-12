const colors = require("colors");
const prompt = require("prompt");
const { promisify } = require("es6-promisify");


module.exports = async () => {
  try {
    console.log(colors.yellow("腾讯云秘钥信息查询:"), colors.yellow("https://console.cloud.tencent.com/cam/capi"));
    console.log(colors.blue("秘钥信息将会储存在本地,可使用view命令查看"));
    prompt.message = undefined;
    prompt.delimiter = "";
    prompt.start();
    const { AppId, SecretId, SecretKey } = await promisify(prompt.get)([{
      name: "AppId",
      required: true,
      message: colors.red("AppId必须填写!"),
      description: colors.white("请输入AppId")
    }, {
      name: "SecretId",
      required: true,
      message: colors.red("SecretId必须填写!"),
      description: colors.white("请输入SecretId")
    }, {
      name: "SecretKey",
      required: true,
      message: colors.red("SecretKey必须填写!"),
      description: colors.white("请输入SecretKey")
    }]);
    return { AppId, SecretId, SecretKey };
  } catch (error) {
    if (error.message === "canceled") {
      process.exit(0);
    };
    throw error;
  };
};
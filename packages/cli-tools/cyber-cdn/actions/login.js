const toast = require("@cyber-tools/cli-utils/toast");
const setSecret = require("@/utils/secret/setSecret")

module.exports = async () => {
  try {
    await setSecret();
    toast.succeed("秘钥信息设置成功!");
  } catch (error) {
    throw error;
  };
};
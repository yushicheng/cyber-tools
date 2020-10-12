const toast = require("@cyber-tools/cli-utils/toast");
const clearSecret = require("@/utils/secret/clearSecret");

module.exports = async () => {
  try {
    await clearSecret();
    toast.succeed("秘钥信息清除成功!");
  } catch (error) {
    throw error;
  };
};
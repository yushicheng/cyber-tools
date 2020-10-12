const NodeCosClass = require("cos-nodejs-sdk-v5");
const getSecret = require("@/utils/secret/getSecret");

module.exports = async () => {
  try {
    const { AppId, ...secretInfo } = await getSecret();
    const tencent = new NodeCosClass(secretInfo);
    return tencent;
  } catch (error) {
    throw error;
  };
};
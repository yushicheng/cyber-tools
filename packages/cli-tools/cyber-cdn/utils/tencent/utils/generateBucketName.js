const getSecret = require("@/utils/secret/getSecret");

module.exports = async () => {
  try {
    const { AppId } = await getSecret();
    return ["simple", AppId].join("-");
  } catch (error) {
    throw error;
  };
};

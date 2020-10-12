const pathExists = require("path-exists");
const { readFile } = require("jsonfile");

const setSecret = require("@/utils/secret/setSecret");
const { secretLocalFile } = require("@/configs/runtime.config");

module.exports = async function getSecret() {
  try {
    if (await pathExists(secretLocalFile)) {
      const secret = await readFile(secretLocalFile);
      return secret;
    } else {
      await setSecret();
      const secret = await getSecret();
      return secret;
    };
  } catch (error) {
    throw error;
  };
};
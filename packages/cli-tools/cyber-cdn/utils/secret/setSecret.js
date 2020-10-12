const { writeFile } = require("jsonfile");
const inputSecretInfo = require("@/utils/secret/inputSecretInfo");
const { secretLocalFile } = require("@/configs/runtime.config");

module.exports = async function setSecret() {
  try {
    const SecretInfo = await inputSecretInfo();
    await writeFile(secretLocalFile, SecretInfo, { spaces: 2, EOL: "\r\n" });
  } catch (error) {
    throw error;
  };
};
const path = require("path");
const pathExists = require("path-exists");

module.exports = async () => {
  try {
    const npmignoreFilePath = path.join(process.cwd(), ".npmignore");
    const hasFile = await pathExists(npmignoreFilePath);
    return hasFile;
  } catch (error) {
    throw error;
  };
};
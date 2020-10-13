const path = require("path");
const pathExists = require("path-exists");

module.exports = async (filename) => {
  try {
    const ignoreFilePath = path.resolve(process.cwd(), filename);
    const hasIgnoreFile = await pathExists(ignoreFilePath);
    return hasIgnoreFile;
  } catch (error) {
    throw error;
  };
};
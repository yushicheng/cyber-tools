const path = require("path");
const pathExists = require("path-exists");

module.exports = async () => {
  try {
    const npmrcFilePath = path.join(process.cwd(), ".npmrc");
    const hasFile = await pathExists(npmrcFilePath);
    return hasFile;
  } catch (error) {
    throw error;
  };
};
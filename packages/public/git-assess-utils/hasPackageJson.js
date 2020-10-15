const path = require("path");
const pathExists = require("path-exists");

module.exports = async () => {
  try {
    const jsonFilePath = path.resolve(process.cwd(), "package.json");
    const hasJsonFile = await pathExists(jsonFilePath);
    return hasJsonFile;
  } catch (error) {
    throw error;
  };
};
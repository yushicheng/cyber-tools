const glob = require("glob");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const matchPattern = path.resolve(process.cwd(), "./**/**.mock.js");
    const matchFiles = await promisify(glob)(matchPattern);
    const importTask = matchFiles.map((filePath) => {
      return require(filePath);
    });
    const fileContent = await Promise.all(importTask);
    return Object.assign.apply(null, fileContent);
  } catch (error) {
    throw error;
  };
};
const glob = require("glob");
const path = require("path");
const { promisify } = require("es6-promisify");

const getServerConfig = require("@/utils/getServerConfig");

module.exports = async () => {
  try {
    const { ignore } = await getServerConfig();
    const matchPattern = path.resolve(process.cwd(), "./**/**.mock.js");
    const matchFiles = await promisify(glob)(matchPattern, { ignore });
    const importTask = matchFiles.map((filePath) => {
      delete require.cache[require.resolve(filePath)];
      return require(filePath);
    });
    const fileContent = await Promise.all(importTask);
    return Object.assign.apply(null, fileContent);
  } catch (error) {
    throw error;
  };
};
const glob = require("glob");
const path = require("path");
const { promisify } = require("es6-promisify");
const { localFileRecord } = require("@/configs/runtime.config");

module.exports = async () => {
  try {
    const pattern = path.join(process.cwd(), "./**/", localFileRecord);
    const matchFiles = await promisify(glob)(pattern);
    return matchFiles;
  } catch (error) {
    throw error;
  }
};
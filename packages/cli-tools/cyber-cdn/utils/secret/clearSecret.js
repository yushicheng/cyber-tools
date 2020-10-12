const fs = require("fs");
const { promisify } = require("es6-promisify");
const { secretLocalFile } = require("@/configs/runtime.config");

module.exports = async () => {
  try {
    await promisify(fs.unlink)(secretLocalFile);
  } catch (error) {
    throw error;
  }
};
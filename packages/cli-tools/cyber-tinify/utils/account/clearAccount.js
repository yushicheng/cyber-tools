const fs = require("fs");
const { promisify } = require("es6-promisify");
const { localAccountFile } = require("@/configs/runtime.config");

module.exports = async () => {
  try {
    await promisify(fs.unlink)(localAccountFile);
  } catch (error) {
    throw error;
  }
};
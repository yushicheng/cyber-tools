const pathExists = require("path-exists");

module.exports = async () => {
  try {
    const result = await pathExists("./.git");
    return result;
  } catch (error) {
    throw error;
  };
};
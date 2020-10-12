const open = require("open");
const { BASIC_GITHUB_URL } = require("@/configs/runtime.config");


module.exports = async (type) => {
  try {
    const target = [BASIC_GITHUB_URL, type].join("/");
    await open(target);
  } catch (error) {
    throw error;
  };
};
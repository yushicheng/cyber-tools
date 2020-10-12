const glob = require("glob");
const path = require("path");
const { promisify } = require("es6-promisify");

module.exports = async () => {
  try {
    const match_file_pattern = path.relative(process.cwd(), "**/*.pdf");
    const match_file_array = await promisify(glob)(match_file_pattern);
    return match_file_array;
  } catch (error) {
    throw error;
  };
};
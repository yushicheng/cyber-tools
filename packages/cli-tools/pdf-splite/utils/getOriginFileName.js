const path = require("path");

module.exports = async (origin_file_name) => {
  const { name } = path.parse(origin_file_name);
  return name;
};
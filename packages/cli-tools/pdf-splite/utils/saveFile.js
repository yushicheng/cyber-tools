const fs = require("fs");
const path = require("path");
const { promisify } = require("es6-promisify");

const getOriginFileName = require("@/utils/getOriginFileName");


module.exports = async (filename, bufferContent, origin_file_name) => {
  try {
    const origin_parse_name = await getOriginFileName(origin_file_name);
    await promisify(fs.mkdir)(origin_parse_name, { recursive: true });
    const saveFileName = path.resolve(process.cwd(), origin_parse_name, filename);
    await promisify(fs.writeFile)(saveFileName, bufferContent);
  } catch (error) {
    throw error;
  };
};
const glob = require("glob");
const path = require("path");
const { promisify } = require("es6-promisify");
const getConfigFile = require("@/utils/usually/getConfigFile");

// 匹配到所有的目录
module.exports = async () => {
  try {
    const { ignore } = await getConfigFile();
    const directoryPattern = path.join(process.cwd(), "./**/");
    const directory = await promisify(glob)(directoryPattern, { ignore: ["**/node_modules/**"].concat(ignore) });
    return directory;
  } catch (error) {
    throw error;
  };
};
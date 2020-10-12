const path = require("path");
const glob = require("glob");
const { promisify } = require("es6-promisify");

const matchDirectory = require("@/utils/match/matchDirectory");
const getConfigFile = require("@/utils/usually/getConfigFile");
const getLocalContent = require("@/utils/usually/getLocalContent");

module.exports = async () => {
  try {
    const { extensions, ignore } = await getConfigFile();
    const directorys = await matchDirectory();
    const taskList = directorys.map(async (directoryName) => {
      // 根据目录下的file.oss.json来过滤重复的文件
      const localContent = await getLocalContent(directoryName);
      const pattern = path.join(directoryName, `./*.{${extensions.join(",")}}`);
      const matchFiles = await promisify(glob)(pattern, { ignore });
      return matchFiles.filter((filePath) => {
        const { name } = path.parse(filePath);
        return (localContent[name] ? false : true);
      });
    });
    const matchResult = await Promise.all(taskList);
    return matchResult.flat();
  } catch (error) {
    throw error;
  };
};
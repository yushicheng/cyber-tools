const url = require("url");
const path = require("path");
const matchDirectory = require("@/utils/match/matchDirectory");
const getLocalContent = require("@/utils/usually/getLocalContent");


module.exports = async () => {
  try {
    const directorys = await matchDirectory();
    const taskList = directorys.map(async (directoryPath) => {
      const content = await getLocalContent(directoryPath);
      const records = Object.keys(content).map((fileName) => {
        const remote = content[fileName];
        const { pathname } = url.parse(remote);
        const { ext, base } = path.parse(pathname);
        return { fileName: `${fileName}${ext}`, remoteFileKey: base, remote }
      });
      return { dist: directoryPath, records };
    });
    const distnations = await Promise.all(taskList);
    return distnations;
  } catch (error) {
    throw error;
  };
};
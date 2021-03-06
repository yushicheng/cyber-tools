const { fromPairs } = require("lodash");
const toast = require("@cyber-tools/cli-utils/toast");

const beforeTinify = require("@/scripts/beforeTinify");
const tinifySingle = require("@/scripts/tinifySingle");
const writeLocalRecord = require("@/utils/record/writeLocalRecord");


module.exports = async () => {
  try {
    toast.start("正在压缩... ...");
    const { matchFiles, progress } = await beforeTinify();
    const masterTask = matchFiles.map(async ({ filePath, originFileSign }) => {
      try {
        const { afterFileSign, ...otherMessage } = await tinifySingle({ filePath, originFileSign }, progress)
        return [afterFileSign, otherMessage];
      } catch (error) {
        throw error;
      };
    });
    const masterTaskResult = fromPairs(await Promise.all(masterTask));
    await writeLocalRecord(masterTaskResult);
    toast.succeed("压缩完成!");
  } catch (error) {
    throw error;
  };
};